import ensureAuthenticated from '../../components1/ensureAuthenticated'
import AdminLayout from '../../components1/admin/adminLayout'
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
