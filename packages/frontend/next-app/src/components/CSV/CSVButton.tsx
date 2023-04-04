import { Box, Button, Typography } from '@mui/material';
import { useCSVReader } from 'react-papaparse';

export default function CSVButton({
    dataParser,
}: {
    dataParser: (data: any) => void;
}) {
    const { CSVReader } = useCSVReader();

    return (
        <CSVReader
            onUploadAccepted={(results: any) => {
                // 공백 제거
                results.data = results.data.map((row: any) => {
                    return row.map((cell: any) => cell.trim());
                });

                // 빈 행 제거
                results.data = results.data.filter((row: any) => {
                    return row[0] !== '';
                });

                // ' 제거
                results.data = results.data.map((row: any) => {
                    return row.map((cell: any) => cell.replace(/'/g, ''));
                });

                // - 제거
                results.data = results.data.map((row: any) => {
                    return row.map((cell: any) => cell.replace(/-/g, ''));
                });

                dataParser(results.data);
            }}
        >
            {({ getRootProps, acceptedFile, getRemoveFileProps }: any) => (
                <>
                    <Box>
                        <Button {...getRootProps()} variant={'contained'}>
                            CSV 파일 업로드
                        </Button>
                        <Typography variant='caption'>
                            {acceptedFile && acceptedFile.name}
                        </Typography>
                        <Button variant='contained' {...getRemoveFileProps()}>
                            Remove
                        </Button>
                    </Box>
                </>
            )}
        </CSVReader>
    );
}
