// src/components/Dashboard.jsx
import React from "react";
import Header from "./Header";
const rows = [
  {
    id: 100100,
    name: "Asiful Islam",
    diamond: 64000,
    accountType: "REGULAR",
    userType: "USER",
    img: "",
  },
  {
    id: 100101,
    name: "Sp-Live",
    diamond: 3702690,
    accountType: "REGULAR",
    userType: "USER",
    img: "",
  },
  {
    id: 100102,
    name: "Olivia Hyde",
    diamond: 398113,
    accountType: "REGULAR",
    userType: "VIP",
    img: "",
  },
  {
    id: 100103,
    name: "Foreign IT",
    diamond: 0,
    accountType: "REGULAR",
    userType: "USER",
    img: "",
  },
  {
    id: 100107,
    name: "Samira Islam",
    diamond: 11260100,
    accountType: "REGULAR",
    userType: "USER",
    img: "",
  },
  {
    id: 100112,
    name: "Asiful Lesan Islam GG",
    diamond: 4988190,
    accountType: "REGULAR",
    userType: "VVIP",
    img: "",
  },
  {
    id: 100113,
    name: "Tripti",
    diamond: 16500,
    accountType: "REGULAR",
    userType: "USER",
    img: "",
  },
  {
    id: 100114,
    name: "Lina",
    diamond: 34500,
    accountType: "REGULAR",
    userType: "USER",
    img: "",
  },
  {
    id: 100115,
    name: "Rafiq",
    diamond: 89000,
    accountType: "REGULAR",
    userType: "USER",
    img: "",
  },
];

export default function Dashboard({ open, toggleMenu }) {
  return (
    <main
      className={`flex-1 flex flex-col transition-all duration-300 ${
        open ? "ml-[100px]" : "ml-5"
      }`}
    >
      <section className="md:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          <DashboardCard
            title="Total Percentage"
            cardTitle="Today"
            value="1,245"
            color="bg-blue-500"
          />
          <DashboardCard
            title="Total Percentage"
            cardTitle="All time"
            value="1362647"
            color="bg-indigo-500"
          />
          <DashboardCard
            title="Total Send"
            cardTitle="Today"
            value="0"
            color="bg-green-500"
          />
          <DashboardCard
            title="Total Send"
            cardTitle="All time"
            value="7902341"
            color="bg-purple-500"
          />
          <DashboardCard
            title="Total Receive"
            cardTitle="Today"
            value="0"
            color="bg-yellow-500"
          />
          <DashboardCard
            title="Total Receive"
            cardTitle="All time"
            value="1682435"
            color="bg-pink-500"
          />
        </div>
      </section>
      <section className="flex md:flex-row sm:flex-col flex-col  ">
        <div className="p-2 md:w-[1000px] ">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex items-center justify-between mb-3 px-2">
              <h1 className="text-2xl  font-bold">Recent user</h1>
              <a
                href="/user"
                className="p-[3px] bg-[#d6624e] text-white text-[12px] rounded-[3px] cursor-pointer "
              >
                View All
              </a>
            </div>
            <table className="min-w-full border border-gray-200 divide-y divide-gray-200 rounded-lg shadow-md">
              <thead className="bg-[#2a2185] ">
                <tr>
                  <th className="px-4 py-3 text-left text-white font-medium">
                    ID
                  </th>
                  <th className="px-4 py-3 text-left text-white font-medium">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left text-white font-medium">
                    Diamond
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr
                    key={row.id}
                    className={`${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-gray-100 transition-colors`}
                  >
                    <td className="px-4 py-3 text-gray-800 font-bold">
                      {row.id}
                    </td>
                    <td className="px-4 py-3 text-gray-800 font-bold">
                      {row.name}
                    </td>
                    <td className="px-4 py-3 text-gray-800 font-bold">
                      {row.diamond.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="p-2 md:w-[600px]">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="mb-3">
              <h1 className="text-2xl  font-bold">Recent Type of User</h1>
            </div>
            <table className="min-w-full border border-gray-200 divide-y divide-gray-200 rounded-lg shadow-md">
              <thead className="bg-[#2a2185] ">
                <tr>
                  <th className="px-4 py-3 text-left text-white font-medium">
                    Account type
                  </th>
                  <th className="px-4 py-3 text-left text-white font-medium">
                    User type
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr
                    key={row.id}
                    className={`${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-gray-100 transition-colors`}
                  >
                    <td className="px-4 py-3 text-gray-800 font-bold">
                      {row.accountType}
                    </td>
                    <td className="py-3 px-4 text-center whitespace-nowrap">
                      <span
                        className={`px-2 py-1 rounded-md text-xs font-medium ${
                          row.userType === "VIP"
                            ? "bg-yellow-100 text-yellow-700"
                            : row.userType === "VVIP"
                            ? "bg-purple-100 text-purple-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {row.userType}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}

function DashboardCard({ title, value, color, cardTitle }) {
  return (
    <div className={`p-4 rounded-xl text-white ${color}`}>
      <div className="flex justify-between items-center">
        <h2 className="text-[15px] font-medium">{title}</h2>
        <h4 className="text-[12px] font-medium">{cardTitle}</h4>
      </div>
      <p className="text-[16px] font-bold mt-2">{value}</p>
    </div>
  );
}
