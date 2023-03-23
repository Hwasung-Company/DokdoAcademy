import { Box, Typography } from '@mui/material';
import { alpha } from '@mui/system';

type ScheduleItemProps = {
    dot: 'start' | 'end';
    title: string;
    contents: ContentType[] | LocationContentType;
};

type ContentType = {
    icon: React.ReactNode;
    text: string;
    description?: string[];
    info?: string[];
};

type LocationContentType = {
    icon: React.ReactNode;
    startTime: string;
    endTime: string;
    location: string;
    destination: string;
    duration: string;
};

const ScheduleItem = ({ dot, title, contents }: ScheduleItemProps) => {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    padding: '1rem',
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        paddingTop: '0.2rem',
                        position: 'relative',
                    }}
                >
                    <Box
                        sx={(theme) => ({
                            backgroundColor: alpha(
                                theme.palette.primary.main,
                                0.1,
                            ),
                            width: '1.5rem',
                            height: '1.5rem',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        })}
                        id='start'
                    >
                        <Box
                            sx={(theme) => ({
                                backgroundColor: alpha(
                                    theme.palette.primary.main,
                                    0.9,
                                ),
                                width: '0.8rem',
                                height: '0.8rem',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            })}
                        ></Box>
                    </Box>
                    {dot === 'start' && (
                        <Box
                            sx={(theme) => ({
                                position: 'absolute',
                                height: 'calc(100% + 2rem)',
                                top: '1rem',
                                width: '0.2rem',
                                backgroundColor: alpha(
                                    theme.palette.primary.main,
                                    0.1,
                                ),
                            })}
                        />
                    )}
                </Box>
                <Box
                    sx={{
                        flex: 9,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Typography variant='h6'>{title}</Typography>
                    {Array.isArray(contents) ? (
                        <dl>
                            {contents.map((content, index) => [
                                <dt key={'schedule' + title + index}>
                                    <Typography
                                        variant='body1'
                                        sx={{
                                            '& > svg': {
                                                marginRight: '0.5rem',
                                                fontSize: 'inherit',
                                                color: 'primary.main',
                                            },
                                        }}
                                    >
                                        {content.icon}
                                        {content.text}
                                    </Typography>
                                </dt>,
                                content.description !== undefined &&
                                    content.description.map((desc, index) => (
                                        <dd
                                            key={
                                                'schedule' +
                                                title +
                                                index +
                                                'discrition'
                                            }
                                        >
                                            <Box
                                                display='flex'
                                                sx={{
                                                    gap: '0.5rem',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <Box
                                                    component='span'
                                                    sx={{
                                                        width: '0.2rem',
                                                        height: '0.2rem',
                                                        borderRadius: '50%',
                                                        backgroundColor:
                                                            'primary.main',
                                                        display: 'inline-block',
                                                    }}
                                                />
                                                <Typography
                                                    variant='body1'
                                                    fontWeight={'bold'}
                                                    color='primary.main'
                                                >
                                                    {desc}
                                                </Typography>
                                            </Box>
                                        </dd>
                                    )),
                                content.info !== undefined && (
                                    <dd>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                width: '100%',
                                                padding: '0.5rem',
                                                border: '1px solid',
                                                borderColor: 'grey.300',
                                            }}
                                        >
                                            <Typography
                                                variant='body1'
                                                color='warning.main'
                                                fontWeight='bold'
                                            >
                                                &#8251; 안내사항
                                            </Typography>
                                            {content.info.map((info, index) => (
                                                <Box
                                                    key={
                                                        'schedule' +
                                                        title +
                                                        index +
                                                        'info'
                                                    }
                                                    display='flex'
                                                    sx={{
                                                        gap: '0.5rem',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    <Box
                                                        component='span'
                                                        sx={{
                                                            width: '0.2rem',
                                                            height: '0.2rem',
                                                            borderRadius: '50%',
                                                            backgroundColor:
                                                                'warning.main',
                                                            display:
                                                                'inline-block',
                                                        }}
                                                    />
                                                    <Typography variant='body1'>
                                                        {info}
                                                    </Typography>
                                                </Box>
                                            ))}
                                        </Box>
                                    </dd>
                                ),
                            ])}
                        </dl>
                    ) : (
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    width: '100%',
                                    gap: '0.5rem',
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                    }}
                                >
                                    <Typography
                                        variant='caption'
                                        fontSize='0.5em'
                                    >
                                        FROM
                                    </Typography>
                                    <Typography variant='body1'>
                                        &#183;
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        flexGrow: 1,
                                        height: '1px',
                                        backgroundColor: 'grey.600',
                                    }}
                                />
                                <Box
                                    sx={{
                                        '& > svg': {
                                            color: 'warning.main',
                                        },
                                    }}
                                >
                                    {contents.icon}
                                </Box>
                                <Box
                                    sx={{
                                        flexGrow: 1,
                                        height: '1px',
                                        backgroundColor: 'grey.600',
                                    }}
                                />
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                    }}
                                >
                                    <Typography variant='body1'>
                                        &#183;
                                    </Typography>
                                    <Typography
                                        variant='caption'
                                        fontSize='0.5em'
                                    >
                                        TO
                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    width: '100%',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                    }}
                                >
                                    <Typography variant='caption'>
                                        {contents.startTime}
                                    </Typography>
                                    <Typography variant='h5' fontWeight={300}>
                                        {contents.location}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography
                                        variant='subtitle2'
                                        color='primary.main'
                                    >
                                        {contents.duration}
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-end',
                                    }}
                                >
                                    <Typography variant='caption'>
                                        {contents.endTime}
                                    </Typography>
                                    <Typography variant='h5' fontWeight={300}>
                                        {contents.destination}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    )}
                </Box>
            </Box>
        </>
    );
};
export default ScheduleItem;
