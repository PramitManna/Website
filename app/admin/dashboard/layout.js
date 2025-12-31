import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { verifySession } from '@/lib/auth';

export default async function DashboardLayout({ children }) {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_token')?.value;
    const session = await verifySession(token);

    if (!session) {
        redirect('/admin/login');
    }

    return <>{children}</>;
}
