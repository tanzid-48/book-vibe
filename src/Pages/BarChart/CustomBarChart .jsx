import React, { useContext } from 'react';
import { Bar, BarChart, XAxis, YAxis, Cell, LabelList, ResponsiveContainer } from 'recharts';
import { BookContext } from '../../context/BookContext';

const COLORS = ['#2196F3', '#00BCD4', '#FFC107', '#FF7043', '#F44336'];

const getPath = (x, y, width, height) =>
    `M${x + width / 2},${y}
     C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2},${y}
     C${x + width / 2},${y + height / 3} ${x + width / 3},${y + height} ${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2},${y}
     Z`;

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    if (x == null || y == null || width == null || height == null) return null;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const CustomLabel = (props) => {
    const { x, y, width, value, fill } = props;
    return (
        <text
            x={x + width / 2}
            y={y - 8}
            fill={fill}
            textAnchor="middle"
            fontSize={14}
            fontWeight="bold"
        >
            {value}
        </text>
    );
};

const CustomBarChart = () => {
    const { storedBooks } = useContext(BookContext);

    const data = storedBooks.map((book) => ({
        name: book.bookName,
        pages: book.totalPages,
    }));

    if (data.length === 0) return (
       <div className="h-[60vh] flex flex-col items-center justify-center bg-gray-50 rounded-3xl">
                    <div className="text-6xl mb-4">📚</div>
                    <h3 className="text-3xl font-bold text-gray-700">No Read Books Yet</h3>
                    <p className="text-gray-500 mt-3 max-w-md text-center">
                        Books you mark as "Read" will appear here.
                    </p>
                </div>
    );

    return (
        <div className="bg-gray-50 rounded-2xl p-6">
            <ResponsiveContainer width="100%" height={350}>
                <BarChart data={data} margin={{ top: 40, right: 30, left: 20, bottom: 20 }}
                    barCategoryGap="30%">
                    <XAxis
                        dataKey="name"
                        tick={{ fontSize: 12, fill: '#666' }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis
                        tick={{ fontSize: 12, fill: '#aaa' }}
                        axisLine={false}
                        tickLine={false}
                        tickCount={6}
                    />
                    <Bar dataKey="pages" shape={<TriangleBar />} isAnimationActive={true}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                        <LabelList
                            dataKey="pages"
                            content={(props) => (
                                <CustomLabel
                                    {...props}
                                    fill={COLORS[props.index % COLORS.length]}
                                />
                            )}
                        />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CustomBarChart;