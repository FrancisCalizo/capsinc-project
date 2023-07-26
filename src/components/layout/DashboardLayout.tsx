import React from 'react';

import Topbar from 'src/components/layout/Topbar';
import Sidebar from 'src/components/layout/Sidebar';
import Content from 'src/components/layout/Content';

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
