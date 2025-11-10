import React, { useState } from "react";
import Sidebar from "./Sidebar";

export default function User() {
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

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  const totalPages = Math.ceil(rows.length / rowsPerPage);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = rows.slice(indexOfFirstRow, indexOfLastRow);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 overflow-x-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 w-full transition-all duration-300 p-0 sm:p-6">
        {/* Header */}
        <h2 className="text-[#2a2185] text-xl font-semibold mb-4">
          User Management
        </h2>

        {/* === Responsive Table Wrapper === */}
        <div
          className="overflow-x-auto bg-white rounded-lg shadow-md scrollbar-hide"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div className="min-w-[600px]">
            <table className="min-w-full border-collapse table-auto">
              <thead>
                <tr className="bg-[#2a2185] text-white text-left text-sm uppercase tracking-wider">
                  <th className="py-3 px-4">ID</th>
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4 text-center">Diamonds</th>
                  <th className="py-3 px-4 text-center">Account Type</th>
                  <th className="py-3 px-4 text-center">User Type</th>
                </tr>
              </thead>
              <tbody>
                {currentRows.map((row, index) => (
                  <tr
                    key={row.id}
                    className={`text-gray-700 text-sm hover:bg-gray-50 transition ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <td className="py-3 px-4 font-medium whitespace-nowrap">
                      {row.id}
                    </td>

                    <td className="py-3 px-4 flex items-center gap-3 whitespace-nowrap">
                      {row.img ? (
                        <img
                          src={row.img}
                          alt={row.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 text-xs font-bold uppercase">
                          {row.name.charAt(0)}
                        </div>
                      )}
                      <span>{row.name}</span>
                    </td>

                    <td className="py-3 px-4 text-center font-semibold text-[#2a2185] whitespace-nowrap">
                      {row.diamond.toLocaleString()}
                    </td>

                    <td className="py-3 px-4 text-center whitespace-nowrap">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs font-medium">
                        {row.accountType}
                      </span>
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

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 text-sm">
          <span className="text-gray-600 mb-3 sm:mb-0">
            Showing {indexOfFirstRow + 1} -{" "}
            {Math.min(indexOfLastRow, rows.length)} of {rows.length}
          </span>

          <div className="flex items-center space-x-1">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-1 border rounded-md ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white hover:bg-gray-100 text-gray-700"
              }`}
            >
              Prev
            </button>

            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`px-3 py-1 border rounded-md ${
                  currentPage === i + 1
                    ? "bg-[#2a2185] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 border rounded-md ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white hover:bg-gray-100 text-gray-700"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
