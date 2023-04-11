import CSVButton from 'next-app/src/components/CSV/CSVButton';

export default function CSVComponent() {
    return (
        <CSVButton
            dataParser={(data) => {
                console.log(JSON.stringify(data));
            }}
        />
    );
}
