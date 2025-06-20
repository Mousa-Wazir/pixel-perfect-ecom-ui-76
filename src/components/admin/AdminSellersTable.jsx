import React, { useState } from "react";
import { Filter, Plus, Eye, Edit, MoreHorizontal, Star } from "lucide-react";
import ViewDetailModal from "./ViewDetailModal";

// DEMO SELLERS DATA
const DEMO_SELLERS = [
  {
    id: "SEL-001",
    name: "TechStore Inc.",
    owner: "David Kumar",
    email: "david@techstore.com",
    phone: "+1 (555) 234-5678",
    products: 45,
    sales: 12847.5,
    rating: 4.8,
    status: "Active"
  },
  {
    id: "SEL-002",
    name: "Handcraft Haven",
    owner: "Maria Rodriguez",
    email: "maria@handcrafthaven.com",
    phone: "+1 (555) 345-6789",
    products: 78,
    sales: 8943.2,
    rating: 4.9,
    status: "Active"
  },
  {
    id: "SEL-003",
    name: "Home Décor Plus",
    owner: "Jennifer Chen",
    email: "jennifer@homedecorplus.com",
    phone: "+1 (555) 456-7890",
    products: 92,
    sales: 15621.8,
    rating: 4.7,
    status: "Active"
  },
  {
    id: "SEL-004",
    name: "Beauty Essentials",
    owner: "Sarah Thompson",
    email: "sarah@beautyessentials.com",
    phone: "+1 (555) 567-8901",
    products: 34,
    sales: 6235.6,
    rating: 4.6,
    status: "Pending"
  },
  {
    id: "SEL-005",
    name: "Fashion Forward",
    owner: "Michael Johnson",
    email: "michael@fashionforward.com",
    phone: "+1 (555) 678-9012",
    products: 156,
    sales: 22890.45,
    rating: 4.5,
    status: "Suspended"
  }
];

// Demo seller stats
const KPI = [
  {
    icon: (
      <div className="p-2 bg-blue-100 rounded-lg">
        <svg width={28} height={28} fill="none" viewBox="0 0 24 24">
          <rect width="100%" height="100%" fill="#e0edff"/>
          <rect x="4" y="7" width="16" height="10" rx="3" className="fill-blue-600" />
        </svg>
      </div>
    ),
    label: "Total Sellers",
    value: "127"
  },
  {
    icon: (
      <div className="p-2 bg-green-100 rounded-lg">
        <svg width={28} height={28} fill="none" viewBox="0 0 24 24">
          <rect width="100%" height="100%" fill="#e6faee"/>
          <rect x="5" y="9" width="14" height="6" rx="2" className="fill-green-600" />
        </svg>
      </div>
    ),
    label: "Active Sellers",
    value: "98"
  },
  {
    icon: (
      <Star className="w-7 h-7 text-yellow-500 bg-yellow-100 rounded-md p-1" fill="currentColor"/>
    ),
    label: "Avg Rating",
    value: "4.7"
  },
  {
    icon: (
      <Filter className="w-7 h-7 text-purple-700 bg-purple-100 rounded-md p-1"/>
    ),
    label: "New This Month",
    value: "12"
  }
];

const statusBadge = (status) => {
  switch (status) {
    case "Active":
      return <span className="bg-green-100 text-green-700 rounded-full px-3 py-1 text-xs font-semibold">Active</span>;
    case "Suspended":
      return <span className="bg-red-100 text-red-500 rounded-full px-3 py-1 text-xs font-semibold">Suspended</span>;
    case "Pending":
      return <span className="bg-yellow-100 text-yellow-700 rounded-full px-3 py-1 text-xs font-semibold">Pending</span>;
    default:
      return <span className="bg-gray-100 text-gray-500 rounded-full px-3 py-1 text-xs font-semibold">{status}</span>;
  }
};

const AdminSellersTable = ({ onViewSeller, onAddSeller, onEditSeller }) => {
  const [search, setSearch] = useState("");
  const [viewSeller, setViewSeller] = useState(null);

  const filteredSellers = DEMO_SELLERS.filter(
    s =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.owner.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleMoreActions = (seller) => {
    const actions = [
      'View Products',
      'View Sales Reports',
      'Send Message',
      'Change Status',
      'View Reviews',
      'Export Data'
    ];
    
    const action = window.prompt(`More actions for ${seller.name}:\n\n${actions.map((a, i) => `${i+1}. ${a}`).join('\n')}\n\nEnter number (1-${actions.length}):`);
    
    if (action && parseInt(action) >= 1 && parseInt(action) <= actions.length) {
      window.alert(`${actions[parseInt(action)-1]} for ${seller.name} - This functionality will be implemented soon!`);
    }
  };

  return (
    <>
      <div className="w-full">
        <div className="mb-3 flex flex-col lg:flex-row lg:items-center gap-3 justify-between">
          <div>
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-0">Sellers</h2>
            <div className="text-gray-500 font-normal text-sm lg:text-base">Manage seller accounts and their store information</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
            <div className="flex-1 lg:flex-none flex items-center bg-white border border-gray-200 rounded-lg">
              <svg className="text-gray-400 w-5 h-5 ml-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Search sellers..."
                className="w-full px-3 py-2 text-sm bg-transparent rounded-lg outline-none min-w-0 lg:min-w-[180px]"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <button
              onClick={() => window.alert('Filter functionality will be implemented soon!')}
              className="flex items-center gap-1 px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium bg-white hover:bg-gray-100 transition"
            >
              <Filter size={18} className="text-gray-500" />
              Filter
            </button>
            <button
              onClick={onAddSeller}
              className="flex items-center gap-1 px-5 py-2 rounded-lg bg-black text-white font-semibold shadow hover:bg-gray-900 transition text-sm"
            >
              <Plus size={18} className="mr-1" />
              Add Seller
            </button>
          </div>
        </div>
        
        {/* KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-7">
          {KPI.map((k, i) => (
            <div key={i} className="bg-white rounded-xl px-4 lg:px-6 py-4 lg:py-5 flex gap-3 lg:gap-4 items-center border border-gray-100 min-w-0">
              <div className="flex-shrink-0">{k.icon}</div>
              <div className="min-w-0">
                <div className="text-gray-500 text-sm lg:text-[.98rem] font-medium truncate">{k.label}</div>
                <div className="text-xl lg:text-2xl font-extrabold text-gray-900">{k.value}</div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Table */}
        <div className="rounded-2xl shadow border border-gray-100 bg-white overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-xs text-gray-400 font-semibold border-b">
                  <th className="pl-4 lg:pl-6 py-3 text-left min-w-[200px]">SELLER</th>
                  <th className="py-3 text-left min-w-[180px]">CONTACT</th>
                  <th className="py-3 text-left">PRODUCTS</th>
                  <th className="py-3 text-left">TOTAL SALES</th>
                  <th className="py-3 text-left">RATING</th>
                  <th className="py-3 text-left">STATUS</th>
                  <th className="py-3 text-left">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="text-gray-900">
                {filteredSellers.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-5 text-center text-gray-400">
                      No sellers found.
                    </td>
                  </tr>
                ) : (
                  filteredSellers.map(seller => (
                    <tr key={seller.id} className="border-b last:border-0 hover:bg-gray-50 transition">
                      <td className="pl-4 lg:pl-6 py-3 font-semibold flex items-center gap-3 min-w-[200px]">
                        <div className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center font-semibold text-base flex-shrink-0">
                          <svg width={22} height={22} viewBox="0 0 24 24" fill="none"><rect x="4" y="7" width="16" height="10" rx="3" fill="currentColor" className="text-gray-300"/></svg>
                        </div>
                        <div className="min-w-0">
                          <div className="truncate">{seller.name}</div>
                          <div className="text-xs text-gray-500 font-normal truncate">{seller.owner}</div>
                        </div>
                      </td>
                      <td className="py-3 min-w-[180px]">
                        <div className="truncate">{seller.email}</div>
                        <div className="text-xs text-gray-500 truncate">{seller.phone}</div>
                      </td>
                      <td className="py-3 whitespace-nowrap">{seller.products}</td>
                      <td className="py-3 whitespace-nowrap">${seller.sales.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                      <td className="py-3 flex items-center gap-1 whitespace-nowrap">
                        <Star size={16} className="text-yellow-500 fill-yellow-400" />
                        {seller.rating}
                      </td>
                      <td className="py-3 whitespace-nowrap">{statusBadge(seller.status)}</td>
                      <td className="py-3 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <button
                            className="p-1.5 rounded-full hover:bg-gray-100 transition text-gray-500"
                            title="View Seller"
                            onClick={() => setViewSeller(seller)}
                          >
                            <Eye size={18} />
                          </button>
                          <button
                            className="p-1.5 rounded-full hover:bg-gray-100 transition text-gray-500"
                            title="Edit Seller"
                            onClick={() => onEditSeller(seller)}
                          >
                            <Edit size={18} />
                          </button>
                          <button
                            className="p-1.5 rounded-full hover:bg-gray-100 transition text-gray-500"
                            title="More actions"
                            onClick={() => handleMoreActions(seller)}
                          >
                            <MoreHorizontal size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* View Detail Modal */}
      <ViewDetailModal
        item={viewSeller}
        type="seller"
        isOpen={!!viewSeller}
        onClose={() => setViewSeller(null)}
      />
    </>
  );
};

export default AdminSellersTable;
