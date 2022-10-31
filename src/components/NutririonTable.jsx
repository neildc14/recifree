import React from "react";

function NutririonTable({ recipeNutrients }) {
  return (
    <table className="table-auto w-full mt-6 border-collapse border rounded-3xl border-slate-400">
      <thead className="w-full bg-teal-600 ">
        <tr className="w-full h-10 text-left text-slate-100 font-medium text-xl ">
          <th className="px-2">Nutrients</th>
          <th className="px-2">Quantity</th>
        </tr>
      </thead>
      <tbody className="bg-green-400 text-slate-50">
        {recipeNutrients.map((nutrient) => (
          <tr key={nutrient.label}>
            <td className="px-2 font-medium">{nutrient.label}</td>
            <td className="px-2">
              {Math.floor(nutrient.quantity) + nutrient.unit}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default NutririonTable;
