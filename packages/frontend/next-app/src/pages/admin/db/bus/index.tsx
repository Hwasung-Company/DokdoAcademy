import DbTemplate from 'next-app/src/components/Admin/Templates/DbTemplate'

export default function BusDashboard(){
    return (
        <DbTemplate
            title={'버스 업체 관리'}
            breadcrumbs={[ {href: '/admin/db', label: 'DB'}, {href: '/admin/db/bus', label: '버스 업체 관리'} ]}
        >
            <>bus dashboard</>
        </DbTemplate>
    )
}
