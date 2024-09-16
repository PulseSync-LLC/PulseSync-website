import Dashboard from '@/components/layout/dashboard';
import { ReactNode } from 'react';

const BugReportPage: React.FC = () => {
    return (
        <Dashboard title="Сообщить об ошибке" description="Сообщить об ошибке">
            <div>
                <h1>Сообщить об ошибке</h1>
                <p>В разработке.</p>
            </div>
        </Dashboard>
    );
};

export default BugReportPage;
