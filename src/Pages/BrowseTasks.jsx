import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router';
import { FaSearch, FaFilter, FaMoneyBillWave, FaCalendarAlt, FaTasks, FaUser } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { AuthContext } from '../context/AuthContext';

const BrowseTasks = () => {
  const [tasks, setTasks] = useState([]);
  const { loading, setLoading } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    minBudget: '',
    maxBudget: '',
    deadline: ''
  });
  const [showFilters, setShowFilters] = useState(false);

  // Mock data - replace with actual API call
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        // Simulate API call
        const mockTasks = [
          {
            id: '1',
            title: 'Website Redesign',
            description: 'Need a complete redesign of our company website with modern UI/UX principles. The site should be responsive and optimized for all devices.',
            category: 'Web Development',
            budget: 1500,
            deadline: '2023-12-15',
            postedBy: 'John Doe',
            postedDate: '2023-11-10',
            name: 'Tech Solutions Inc.'
          },
          {
            id: '2',
            title: 'Logo Design',
            description: 'Create a minimalist logo for our tech startup. Should work in both color and black/white versions. Vector format required.',
            category: 'Design',
            budget: 500,
            deadline: '2023-12-01',
            postedBy: 'Sarah Smith',
            postedDate: '2023-11-05',
            name: 'Nova Innovations'
          },
          {
            id: '3',
            title: 'Content Writing',
            description: 'Need 5 blog articles about sustainable technology (2000 words each). Topics will be provided. SEO optimization required.',
            category: 'Writing',
            budget: 300,
            deadline: '2023-11-30',
            postedBy: 'Mike Johnson',
            postedDate: '2023-11-01',
            name: 'Green Future Media'
          },
          {
            id: '4',
            title: 'Social Media Management',
            description: 'Manage our Instagram and LinkedIn accounts for 1 month. Includes content creation, scheduling, and community engagement.',
            category: 'Marketing',
            budget: 800,
            deadline: '2023-12-20',
            postedBy: 'Emma Wilson',
            postedDate: '2023-11-12',
            name: 'Urban Style Co.'
          },
          {
            id: '5',
            title: 'Video Editing',
            description: 'Edit 10 podcast episodes (30-45 mins each). Need intro/outro, sound balancing, and basic color correction for video versions.',
            category: 'Video Editing',
            budget: 1200,
            deadline: '2023-12-10',
            postedBy: 'David Brown',
            postedDate: '2023-11-08',
            name: 'Creative Waves Media'
          },
          {
            id: '6',
            title: 'Data Entry',
            description: 'Transfer data from 50 PDF documents to Excel spreadsheets. Attention to detail is crucial. Formatting guidelines will be provided.',
            category: 'Data Entry',
            budget: 200,
            deadline: '2023-11-25',
            postedBy: 'Lisa Chen',
            postedDate: '2023-10-28',
            name: 'Data Insights LLC'
          }
        ];
        
        setTasks(mockTasks);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tasks:', error);
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  // Filter tasks based on search and filters
  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         task.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (task.name && task.name.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = filters.category ? task.category === filters.category : true;
    const matchesMinBudget = filters.minBudget ? task.budget >= Number(filters.minBudget) : true;
    const matchesMaxBudget = filters.maxBudget ? task.budget <= Number(filters.maxBudget) : true;
    const matchesDeadline = filters.deadline ? task.deadline <= filters.deadline : true;

    return matchesSearch && matchesCategory && matchesMinBudget && matchesMaxBudget && matchesDeadline;
  });

  const categories = [...new Set(tasks.map(task => task.category))];

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Browse Opportunities</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find projects that match your skills and interests. Filter by category, budget, or deadline to find the perfect opportunity.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-8 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search tasks, companies, or descriptions..."
              className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button 
            className="px-4 py-3 bg-emerald-50 text-emerald-700 rounded-lg flex items-center justify-center gap-2 hover:bg-emerald-100 transition border border-emerald-100"
            onClick={() => setShowFilters(!showFilters)}
          >
            <FaFilter />
            <span>{showFilters ? 'Hide Filters' : 'Show Filters'}</span>
          </button>
        </div>

        {/* Expanded Filters */}
        {showFilters && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 border-t border-gray-100">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select
                className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none bg-white"
                value={filters.category}
                onChange={(e) => setFilters({...filters, category: e.target.value})}
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Min Budget ($)</label>
              <input
                type="number"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                placeholder="Any"
                value={filters.minBudget}
                onChange={(e) => setFilters({...filters, minBudget: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Max Budget ($)</label>
              <input
                type="number"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                placeholder="Any"
                value={filters.maxBudget}
                onChange={(e) => setFilters({...filters, maxBudget: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Deadline Before</label>
              <input
                type="date"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                value={filters.deadline}
                onChange={(e) => setFilters({...filters, deadline: e.target.value})}
              />
            </div>
          </div>
        )}
      </div>

      {/* Tasks Grid */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
        </div>
      ) : filteredTasks.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm p-8 border border-gray-100">
          <div className="text-gray-300 mb-4">
            <FaTasks className="inline-block text-5xl" />
          </div>
          <h3 className="text-xl font-medium text-gray-700 mb-2">No tasks found</h3>
          <p className="text-gray-500 mb-4">Try adjusting your search or filters</p>
          <button 
            className="px-4 py-2 text-emerald-600 hover:text-emerald-800 font-medium transition"
            onClick={() => {
              setSearchTerm('');
              setFilters({
                category: '',
                minBudget: '',
                maxBudget: '',
                deadline: ''
              });
            }}
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTasks.map(task => (
            <div key={task.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full">
                    {task.category}
                  </span>
                  <span className="text-lg font-bold text-emerald-600">${task.budget.toLocaleString()}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">{task.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{task.description}</p>
                
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <FaCalendarAlt className="mr-2 text-gray-400" />
                  <span>Deadline: {new Date(task.deadline).toLocaleDateString()}</span>
                </div>
                
                {task.name && (
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <FaUser className="mr-2 text-gray-400" />
                    <span>{task.name}</span>
                  </div>
                )}
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">Posted by {task.postedBy}</span>
                  <Link 
                    to={`/tasks/${task.id}`} 
                    className="flex items-center text-emerald-600 hover:text-emerald-800 font-medium transition"
                  >
                    View Details <FiArrowRight className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowseTasks;