import Dashboard from '@/components/layout/dashboard';
import { ReactNode } from 'react';

const BugReportPage: React.FC = () => {
    return (
        <Dashboard title="Bug Report" description="Сообщить об ошибке">
            <div>
                <h1>Bug Report</h1>
                <p>В разработке.</p>
            </div>
        </Dashboard>
    );
};

export default BugReportPage;
