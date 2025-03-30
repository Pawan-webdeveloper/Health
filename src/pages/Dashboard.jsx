import { Shield, LayoutDashboard, UserPlus, Users, Trash2, Settings, Search, LogOut, CheckCircle, FileText, Clock, AlertCircle, Activity } from "lucide-react"
import { Button } from "../components/ui/button"
import { useAuth } from "../context/AuthContext"
import { useUsers } from "../context/UserContext"
import { useState } from "react"
import UploadForm from "../components/Uploadform"
import RetrieveForm from "../components/RetrieveForm"

// Mock data for users
const mockUsers = [
  { id: 1, name: "John Doe", cid: "CID123456", email: "john@example.com" },
  { id: 2, name: "Jane Smith", cid: "CID789012", email: "jane@example.com" },
  { id: 3, name: "Mike Johnson", cid: "CID345678", email: "mike@example.com" },
]

function Dashboard() {
  const { logout } = useAuth()
  const { users, removeUser } = useUsers()
  const [activeTab, setActiveTab] = useState("dashboard")
  const [searchQuery, setSearchQuery] = useState("")
  const [verifyQuery, setVerifyQuery] = useState("")
  const [selectedUser, setSelectedUser] = useState(null)
  const [verificationStatus, setVerificationStatus] = useState(null)

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.cid.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.address.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      removeUser(userId);
    }
  };

  const handleVerify = () => {
    if (window.confirm("Are you sure you want to verify this document?")) {
      setVerificationStatus("verified");
      // Here you would typically make an API call to update the verification status
      alert("Document verified successfully!");
    }
  };

  const handleVerifySearch = () => {
    const user = users.find(u => 
      u.cid.toLowerCase() === verifyQuery.toLowerCase() || 
      u.name.toLowerCase() === verifyQuery.toLowerCase()
    );
    setSelectedUser(user);
    setVerificationStatus(null);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-blue-900">Dashboard Overview</h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search users..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-blue-400" />
              </div>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-blue-600 font-medium">Total Users</p>
                    <h3 className="text-2xl font-bold text-blue-900 mt-1">{users.length}</h3>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-full">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center text-sm text-green-600">
                    <Activity className="h-4 w-4 mr-1" />
                    <span>Active</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-blue-600 font-medium">Documents</p>
                    <h3 className="text-2xl font-bold text-blue-900 mt-1">{users.length}</h3>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-full">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center text-sm text-green-600">
                    <Activity className="h-4 w-4 mr-1" />
                    <span>Uploaded</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-blue-600 font-medium">Pending Verifications</p>
                    <h3 className="text-2xl font-bold text-blue-900 mt-1">0</h3>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-yellow-600" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center text-sm text-yellow-600">
                    <Activity className="h-4 w-4 mr-1" />
                    <span>Awaiting Review</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-blue-600 font-medium">System Status</p>
                    <h3 className="text-2xl font-bold text-blue-900 mt-1">Online</h3>
                  </div>
                  <div className="bg-green-50 p-3 rounded-full">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center text-sm text-green-600">
                    <Activity className="h-4 w-4 mr-1" />
                    <span>All Systems Operational</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity and Users Table */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {users.slice(0, 5).map((user) => (
                    <div key={user.id} className="flex items-center gap-4 p-3 bg-blue-50 rounded-lg">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <UserPlus className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-blue-900">New user registered</p>
                        <p className="text-xs text-blue-600">{user.name}</p>
                      </div>
                      <div className="ml-auto">
                        <p className="text-xs text-blue-600">
                          {new Date(user.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Users Table */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-blue-900">Registered Users</h3>
                  <Button
                    onClick={() => setActiveTab("create-user")}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-sm"
                  >
                    Add New User
                  </Button>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-blue-100">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-blue-900 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-blue-900 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-blue-900 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-blue-100">
                      {filteredUsers.slice(0, 5).map((user) => (
                        <tr key={user.id} className="hover:bg-blue-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                                <span className="text-blue-600 font-medium">
                                  {user.name.charAt(0)}
                                </span>
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-blue-900">{user.name}</div>
                                <div className="text-xs text-blue-600">{user.address}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Active
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <button
                              onClick={() => handleDeleteUser(user.id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )
      case "create-user":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-900">Create New User</h2>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <UploadForm />
            </div>
          </div>
        )
      case "fetch-user":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-900">Fetch User Details</h2>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <RetrieveForm />
            </div>
          </div>
        )
      case "delete-user":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-900">Delete User</h2>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-blue-900">Enter CID to Delete</label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="text"
                      className="flex-1 px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    <Button className="ml-3 bg-red-600 hover:bg-red-700 text-white">
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      case "settings":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-900">Settings</h2>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-blue-900">Hospital Name</label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-900">Email</label>
                  <input
                    type="email"
                    className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-900">Password</label>
                  <input
                    type="password"
                    className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Save Changes
                </Button>
              </div>
            </div>
          </div>
        )
      case "verify":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-900">Verify Documents</h2>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-2">
                    Enter CID or Username
                  </label>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={verifyQuery}
                      onChange={(e) => setVerifyQuery(e.target.value)}
                      placeholder="Enter CID or username"
                      className="flex-1 px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Button
                      onClick={handleVerifySearch}
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Search
                    </Button>
                  </div>
                </div>

                {selectedUser && (
                  <div className="border border-blue-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">Document Details</h3>
                    <div className="space-y-4">
                      <div>
                        <span className="text-sm font-medium text-blue-900">Name:</span>
                        <p className="text-blue-900">{selectedUser.name}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-blue-900">Address:</span>
                        <p className="text-blue-900">{selectedUser.address}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-blue-900">CID:</span>
                        <p className="text-blue-900 font-mono">{selectedUser.cid}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-blue-900">Uploaded On:</span>
                        <p className="text-blue-900">
                          {new Date(selectedUser.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6">
                      {verificationStatus === "verified" ? (
                        <div className="flex items-center gap-2 text-green-600">
                          <CheckCircle className="h-5 w-5" />
                          <span>Document Verified</span>
                        </div>
                      ) : (
                        <Button
                          onClick={handleVerify}
                          className="bg-green-600 hover:bg-green-700 text-white"
                        >
                          Verify Document
                        </Button>
                      )}
                    </div>
                  </div>
                )}

                {verifyQuery && !selectedUser && (
                  <div className="text-red-600 text-center py-4">
                    No document found with the provided CID or username.
                  </div>
                )}
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex min-h-screen bg-[#F0F8FF]">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-4">
          <div className="flex items-center gap-3 font-semibold">
            <Shield className="h-7 w-7 text-blue-600" />
            <span className="text-blue-800 text-2xl">HealthChain</span>
          </div>
        </div>
        <nav className="mt-8">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`w-full flex items-center gap-3 px-6 py-3 text-left transition-colors ${
              activeTab === "dashboard"
                ? "bg-blue-50 text-blue-600"
                : "text-blue-900 hover:bg-blue-50"
            }`}
          >
            <LayoutDashboard className="h-5 w-5" />
            <span>Dashboard</span>
          </button>
          <button
            onClick={() => setActiveTab("create-user")}
            className={`w-full flex items-center gap-3 px-6 py-3 text-left transition-colors ${
              activeTab === "create-user"
                ? "bg-blue-50 text-blue-600"
                : "text-blue-900 hover:bg-blue-50"
            }`}
          >
            <UserPlus className="h-5 w-5" />
            <span>Create User</span>
          </button>
          <button
            onClick={() => setActiveTab("fetch-user")}
            className={`w-full flex items-center gap-3 px-6 py-3 text-left transition-colors ${
              activeTab === "fetch-user"
                ? "bg-blue-50 text-blue-600"
                : "text-blue-900 hover:bg-blue-50"
            }`}
          >
            <Users className="h-5 w-5" />
            <span>Fetch User</span>
          </button>
          <button
            onClick={() => setActiveTab("delete-user")}
            className={`w-full flex items-center gap-3 px-6 py-3 text-left transition-colors ${
              activeTab === "delete-user"
                ? "bg-blue-50 text-blue-600"
                : "text-blue-900 hover:bg-blue-50"
            }`}
          >
            <Trash2 className="h-5 w-5" />
            <span>Delete User</span>
          </button>
          <button
            onClick={() => setActiveTab("verify")}
            className={`w-full flex items-center gap-3 px-6 py-3 text-left transition-colors ${
              activeTab === "verify"
                ? "bg-blue-50 text-blue-600"
                : "text-blue-900 hover:bg-blue-50"
            }`}
          >
            <CheckCircle className="h-5 w-5" />
            <span>Verify</span>
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={`w-full flex items-center gap-3 px-6 py-3 text-left transition-colors ${
              activeTab === "settings"
                ? "bg-blue-50 text-blue-600"
                : "text-blue-900 hover:bg-blue-50"
            }`}
          >
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </button>
        </nav>
        <div className="absolute bottom-0 w-64 p-4">
          <button
            onClick={logout}
            className="w-full flex items-center gap-3 px-6 py-3 text-left text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {renderContent()}
      </div>
    </div>
  )
}

export default Dashboard 