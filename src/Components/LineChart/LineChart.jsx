import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {
    const subjectMarks = [
        { id: 1, name: "John Doe", math_marks: 85, physics_marks: 75, chemistry_marks: 90 },
        { id: 2, name: "Jane Doe", math_marks: 78, physics_marks: 80, chemistry_marks: 85 },
        { id: 3, name: "Bob Smith", math_marks: 92, physics_marks: 88, chemistry_marks: 95 },
        { id: 4, name: "Alice Johnson", math_marks: 65, physics_marks: 70, chemistry_marks: 75 },
        { id: 5, name: "Charlie Brown", math_marks: 70, physics_marks: 65, chemistry_marks: 80 },
        { id: 6, name: "Emma Davis", math_marks: 88, physics_marks: 92, chemistry_marks: 78 },
        { id: 7, name: "Ethan Taylor", math_marks: 75, physics_marks: 78, chemistry_marks: 85 },
        { id: 8, name: "Olivia Wilson", math_marks: 60, physics_marks: 68, chemistry_marks: 72 },
        { id: 9, name: "Liam Jackson", math_marks: 95, physics_marks: 90, chemistry_marks: 98 },
        { id: 10, name: "Ava Harris", math_marks: 82, physics_marks: 85, chemistry_marks: 88 }
    ];
    return (
        <div>
            <LChart width={1000} height={400} data={subjectMarks}>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math_marks"></Line>
                <Line dataKey="physics_marks" stroke="red"></Line>
            </LChart>
        </div>
    );
};

export default LineChart;