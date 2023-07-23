import React from 'react';

import Topbar from 'src/components/Topbar';
import Sidebar from 'src/components/Sidebar';
import Content from 'src/components/Content';

interface DashboardLayoutProps {
    children: React.ReactNode
}

function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <>
            <Topbar />
            <Sidebar />
            <Content>{children}</Content>
        </>
    );
}

export default DashboardLayout
