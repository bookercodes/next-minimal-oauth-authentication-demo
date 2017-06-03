import ensureAuthenticated from '../../components/ensureAuthenticated'
import AdminLayout from '../../components/admin/adminLayout'
import Link from 'next/link'

const AdminHome = props => {
  return (
    <AdminLayout {...props}>
      <h2>Me</h2>
      <p>
        Click
        {' '}
        <Link href="/admin/contributors/add"><a>here</a></Link>
        {' '}
        to add a contributor
      </p>
    </AdminLayout>
  )
}

export default ensureAuthenticated(AdminHome)
