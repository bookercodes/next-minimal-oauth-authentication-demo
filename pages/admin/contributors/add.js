import AdminLayout from '../../../components/admin/adminLayout'
import ensureAuthenticated from '../../../components/ensureAuthenticated'

const AddContributor = props => (
  <AdminLayout {...props}><h2>Add</h2></AdminLayout>
)

export default ensureAuthenticated(AddContributor)
