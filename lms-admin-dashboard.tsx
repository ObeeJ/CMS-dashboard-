import React, { useState } from 'react';
import { 
  Users, 
  BookOpen, 
  DollarSign, 
  TrendingUp, 
  Plus, 
  Edit, 
  Trash2, 
  Play, 
  Eye,
  CheckCircle,
  Clock,
  Video,
  Upload,
  X,
  Save
} from 'lucide-react';

const LMSAdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [showEpisodeModal, setShowEpisodeModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Sample data
  const stats = {
    totalRevenue: 125000,
    activeUsers: 342,
    totalCourses: 18,
    completionRate: 78
  };

  const courses = [
    {
      id: 1,
      title: "Care for Seniors 101",
      description: "Comprehensive guide to senior care fundamentals",
      price: 2500,
      previewVideo: "preview_seniors_101.mp4",
      thumbnail: "/api/placeholder/300/200",
      totalEpisodes: 3,
      enrollments: 45,
      completions: 32,
      episodes: [
        { id: 1, title: "Patience", duration: "15:30", videoUrl: "ep1_patience.mp4" },
        { id: 2, title: "Cleanliness", duration: "12:45", videoUrl: "ep2_cleanliness.mp4" },
        { id: 3, title: "Empathy", duration: "18:20", videoUrl: "ep3_empathy.mp4" }
      ]
    },
    {
      id: 2,
      title: "Child Care Essentials",
      description: "Essential skills for childcare professionals",
      price: 3000,
      previewVideo: "preview_childcare.mp4",
      thumbnail: "/api/placeholder/300/200",
      totalEpisodes: 4,
      enrollments: 38,
      completions: 24,
      episodes: [
        { id: 1, title: "Safety First", duration: "20:15", videoUrl: "ep1_safety.mp4" },
        { id: 2, title: "Nutrition Basics", duration: "16:30", videoUrl: "ep2_nutrition.mp4" },
        { id: 3, title: "Play & Development", duration: "22:10", videoUrl: "ep3_play.mp4" },
        { id: 4, title: "Emergency Response", duration: "14:45", videoUrl: "ep4_emergency.mp4" }
      ]
    }
  ];

  const users = [
    { id: 1, name: "Adebayo Johnson", email: "ade@email.com", coursesEnrolled: 2, coursesCompleted: 1, totalPaid: 5500, status: "Active" },
    { id: 2, name: "Fatima Ahmed", email: "fatima@email.com", coursesEnrolled: 1, coursesCompleted: 1, totalPaid: 2500, status: "Completed" },
    { id: 3, name: "Chinedu Okafor", email: "chinedu@email.com", coursesEnrolled: 3, coursesCompleted: 0, totalPaid: 8500, status: "In Progress" }
  ];

  const CourseModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Create New Course</h2>
          <button onClick={() => setShowCourseModal(false)} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Course Title</label>
            <input type="text" className="w-full p-2 border rounded-lg" placeholder="e.g., Care for Seniors 101" />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea className="w-full p-2 border rounded-lg h-24" placeholder="Course description..."></textarea>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Price (₦)</label>
              <input type="number" className="w-full p-2 border rounded-lg" placeholder="2500" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <select className="w-full p-2 border rounded-lg">
                <option>Senior Care</option>
                <option>Child Care</option>
                <option>Healthcare</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Course Thumbnail</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <Upload className="mx-auto mb-2 text-gray-400" size={32} />
              <p className="text-sm text-gray-500">Click to upload thumbnail image</p>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Preview Video (Free Taster)</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <Video className="mx-auto mb-2 text-gray-400" size={32} />
              <p className="text-sm text-gray-500">Upload preview video</p>
            </div>
          </div>
          
          <div className="flex gap-2 pt-4">
            <button type="button" className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2">
              <Save size={16} />
              Save Course
            </button>
            <button type="button" onClick={() => setShowCourseModal(false)} className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const EpisodeModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Add Episode</h2>
          <button onClick={() => setShowEpisodeModal(false)} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Episode Title</label>
            <input type="text" className="w-full p-2 border rounded-lg" placeholder="e.g., Patience" />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Episode Number</label>
            <input type="number" className="w-full p-2 border rounded-lg" placeholder="1" />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Episode Video</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <Video className="mx-auto mb-2 text-gray-400" size={32} />
              <p className="text-sm text-gray-500">Upload episode video</p>
            </div>
          </div>
          
          <div className="flex gap-2 pt-4">
            <button type="button" className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">
              Add Episode
            </button>
            <button type="button" onClick={() => setShowEpisodeModal(false)} className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-gray-900">LMS Admin Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Admin Panel</span>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                A
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: TrendingUp },
              { id: 'courses', label: 'Course Management', icon: BookOpen },
              { id: 'users', label: 'User Progress', icon: Users },
              { id: 'payments', label: 'Payments', icon: DollarSign }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                    <p className="text-2xl font-bold text-gray-900">₦{stats.totalRevenue.toLocaleString()}</p>
                  </div>
                  <DollarSign className="text-green-600" size={32} />
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Active Users</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.activeUsers}</p>
                  </div>
                  <Users className="text-blue-600" size={32} />
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Courses</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalCourses}</p>
                  </div>
                  <BookOpen className="text-purple-600" size={32} />
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Completion Rate</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.completionRate}%</p>
                  </div>
                  <TrendingUp className="text-orange-600" size={32} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Course Management Tab */}
        {activeTab === 'courses' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-900">Course Management</h2>
              <button
                onClick={() => setShowCourseModal(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
              >
                <Plus size={16} />
                Create New Course
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {courses.map((course) => (
                <div key={course.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{course.description}</p>
                        <p className="text-lg font-bold text-green-600 mt-2">₦{course.price.toLocaleString()}</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                          <Edit size={16} />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-50 rounded">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <span>{course.totalEpisodes} episodes</span>
                      <span>{course.enrollments} enrollments</span>
                      <span>{course.completions} completed</span>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Episodes:</span>
                        <button
                          onClick={() => {
                            setSelectedCourse(course);
                            setShowEpisodeModal(true);
                          }}
                          className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded"
                        >
                          Add Episode
                        </button>
                      </div>
                      {course.episodes.map((episode, index) => (
                        <div key={episode.id} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                          <div className="flex items-center gap-2">
                            <Play size={14} className="text-gray-400" />
                            <span className="text-sm">Ep {index + 1}: {episode.title}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500">{episode.duration}</span>
                            <button className="text-red-500 hover:text-red-700">
                              <Trash2 size={12} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 flex items-center justify-center gap-2">
                        <Eye size={16} />
                        Preview Course
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* User Progress Tab */}
        {activeTab === 'users' && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-900">User Progress & Enrollment</h2>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Enrolled</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Completed</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Paid</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{user.name}</div>
                            <div className="text-sm text-gray-500">{user.email}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {user.coursesEnrolled} courses
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {user.coursesCompleted} courses
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          ₦{user.totalPaid.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            user.status === 'Completed' ? 'bg-green-100 text-green-800' :
                            user.status === 'Active' ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-blue-600 hover:text-blue-900">View Details</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Payments Tab */}
        {activeTab === 'payments' && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-900">Payment History</h2>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-600" size={20} />
                    <span className="text-sm font-medium text-green-700">Successful Payments</span>
                  </div>
                  <p className="text-2xl font-bold text-green-600 mt-2">₦118,500</p>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Clock className="text-yellow-600" size={20} />
                    <span className="text-sm font-medium text-yellow-700">Pending Payments</span>
                  </div>
                  <p className="text-2xl font-bold text-yellow-600 mt-2">₦6,500</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2">
                    <DollarSign className="text-blue-600" size={20} />
                    <span className="text-sm font-medium text-blue-700">This Month</span>
                  </div>
                  <p className="text-2xl font-bold text-blue-600 mt-2">₦45,000</p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Course</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-900">Jun 27, 2025</td>
                      <td className="px-4 py-3 text-sm text-gray-900">Adebayo Johnson</td>
                      <td className="px-4 py-3 text-sm text-gray-900">Care for Seniors 101</td>
                      <td className="px-4 py-3 text-sm text-gray-900">₦2,500</td>
                      <td className="px-4 py-3">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                          Completed
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-900">Jun 26, 2025</td>
                      <td className="px-4 py-3 text-sm text-gray-900">Fatima Ahmed</td>
                      <td className="px-4 py-3 text-sm text-gray-900">Child Care Essentials</td>
                      <td className="px-4 py-3 text-sm text-gray-900">₦3,000</td>
                      <td className="px-4 py-3">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          Pending
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      {showCourseModal && <CourseModal />}
      {showEpisodeModal && <EpisodeModal />}
    </div>
  );
};

export default LMSAdminDashboard;