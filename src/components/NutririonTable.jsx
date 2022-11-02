import React from "react";

function NutririonTable({ recipeNutrients }) {
  return (
    <table className="table-auto w-full mt-6 border-collapse border rounded-3xl border-slate-400">
      <thead className="w-full bg-slate-100 ">
        <tr className="w-full h-10 text-left text-slate-700 font-medium text-xl ">
          <th className="px-2 text-medium tracking-wide">Nutrients</th>
          <th className="px-2 text-medium tracking-wide">Quantity</th>
        </tr>
      </thead>
      <tbody className="bg-slate-50 text-slate-600">
        {recipeNutrients?.map((nutrient) => (
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
