import AdminLayout from '../../../components1/admin/adminLayout'
import ensureAuthenticated from '../../../components1/ensureAuthenticated'

const AddContributor = props => (
  <AdminLayout {...props}><h2>Add</h2></AdminLayout>
)

export default ensureAuthenticated(AddContributor)
