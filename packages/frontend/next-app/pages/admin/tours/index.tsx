import { Box } from '@mui/material';
import CSVButton from 'next-app/src/components/CSV/CSVButton';
import { useEffect, useState } from 'react';

export default function Tours() {
    const [participants, setParticipants] = useState<any[]>([]);
    const [group, setGroup] = useState<any[]>([]);

    useEffect(() => {
        if (participants.length > 0) {
            const groupBy = (key: string) => (array: any[]) =>
                array.reduce((objectsByKeyValue: any, obj: any) => {
                    const value = obj[key];
                    objectsByKeyValue[value] = (
                        objectsByKeyValue[value] || []
                    ).concat(obj);
                    return objectsByKeyValue;
                }, {});

            const groupByCompany = groupBy('companyGroup')(participants);

            const keys = Object.keys(groupByCompany);

            const splitKeys = keys.map((key: string) => {
                if (key.includes('도')) {
                    return key.split('도')[0] + '도';
                } else if (key.includes('시')) {
                    return key.split('시')[0] + '시';
                } else {
                    return key;
                }
            });

            const deleteDuplicate = splitKeys.filter(
                (item, index) => splitKeys.indexOf(item) === index,
            ) as string[];

            const groupByIncludeKey =
                (key: string, targetKey: string) => (array: any[]) => {
                    return array.filter((obj: any) =>
                        obj[key].includes(targetKey),
                    );
                };

            const groupByDuplicate = deleteDuplicate
                .map((key: string) => {
                    return groupByIncludeKey('companyGroup', key)(participants);
                })
                .sort((a: any, b: any) => b.length - a.length);

            const newGroup: any[][] = [];
            let index = 0;
            let count = 0;
            let groupCount = 0;
            let groupIndex = 0;
            const total = participants.length;
            const groupTotal = groupByDuplicate.length;
            const groupMax = Math.round(participants.length / 4);
            const groupAvg = Math.round(
                (34 - Math.floor(participants.length / 4)) / 4,
            );

            let a = 0;

            while (index < groupByDuplicate.length) {
                if (groupCount === 0) {
                    newGroup.push([]);
                }

                // happy case -> 그룹에 추가해도 34명 이하일 때
                if (groupByDuplicate[index].length <= groupMax - groupCount) {
                    groupCount += groupByDuplicate[index].length;
                    newGroup[groupIndex].push(...groupByDuplicate[index]);
                    index++;
                    continue;
                } else {
                    // sad case -> 그룹이 추가할 수 있는 수가 있는지 지역별로 확인

                    let addCount = groupMax - groupCount;

                    const groupByLocal = groupBy('company')(
                        groupByDuplicate[index],
                    );

                    const localValues: any[] = Object.values(groupByLocal).sort(
                        (a: any, b: any) => b.length - a.length,
                    );

                    let localIndex = 0;

                    const restValues: any[] = [];

                    const lengths = localValues.map((item: any) => item.length);
                    console.log('-----------------', newGroup);
                    while (localIndex < localValues.length) {
                        if (localValues[localIndex].length <= addCount) {
                            newGroup[groupIndex].push(
                                ...localValues[localIndex],
                            );
                            groupCount += localValues[localIndex].length;
                            addCount -= localValues[localIndex].length;
                            localIndex++;
                        } else if (
                            addCount === 0 &&
                            localValues[localIndex].length <= groupAvg
                        ) {
                            groupCount += addCount;
                            addCount = -1;
                            localIndex++;
                        } else {
                            restValues.push(...localValues[localIndex]);
                            localIndex++;
                        }
                    }
                    if (
                        groupCount < 34 &&
                        restValues.length <= 30 - groupCount
                    ) {
                        console.log('restValues', restValues);
                        newGroup[groupIndex].push(...restValues);
                        index++;
                    } else {
                        groupByDuplicate[index] = restValues;
                    }
                    console.log(addCount, restValues, groupAvg);

                    groupCount = 0;
                    groupIndex++;
                }

                a++;
                if (a > 100) break;
            }
            setGroup(newGroup);
        }
    }, [participants]);

    useEffect(() => {
        // console.log('group', group);
    }, [group]);

    return (
        <>
            <CSVButton
                dataParser={(data: string[]) => {
                    const parsedData = data.map((_: any) => {
                        // 공백 제외
                        const participant = _.map((item: string) => {
                            return item.trim();
                        });

                        if (participant[0] === '') return;

                        if (participant.length === 25) {
                            return {};
                        }

                        return {
                            name: participant[0],
                            sexuality: participant[1],
                            contact: participant[2],
                            birth: participant[3],
                            age: participant[4],
                            companyGroup: participant[5],
                            company: participant[6],
                            department: participant[7],
                            tag: participant[8],
                            position: participant[9],
                            companyContact: participant[10],
                            discount: participant[11],
                            deposit: participant[12],

                            // roomMateTarget: participant[13],
                            // etc: participant[14],

                            // depositType: participant[11],
                            // managerCompanyGroup: participant[12],
                            // managerCompany: participant[13],
                            // managerDepartment: participant[14],
                            // managerName: participant[15],
                            // managerContact: participant[16],
                            // refundType: participant[17],
                            // refundBank: participant[18],
                            // refundAccount: participant[19],
                            // refundName: participant[20],
                            // roomMateTarget: participant[21],
                            // etc: participant[22],
                        };
                    });

                    setParticipants(
                        parsedData.filter((item: any) => item !== undefined),
                    );
                }}
            />
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns:
                        'repeat(auto-fill, minmax(250px, 1fr))',
                }}
            >
                {group.map((group: any[], index: number) => {
                    return (
                        <Box
                            sx={{
                                gridColumn: 'span 1',
                            }}
                            key={index}
                        >
                            <h1>
                                {index + 1} {group.length}
                            </h1>
                            <div>
                                {group.map((participant: any) => {
                                    return (
                                        <div>
                                            {participant.name}{' '}
                                            {participant.companyGroup.substr(
                                                0,
                                                3,
                                            )}{' '}
                                            - {participant.company}
                                        </div>
                                    );
                                })}
                            </div>
                        </Box>
                    );
                })}
            </Box>
        </>
    );
}
