import React from "react";
import { IoPlayCircle } from "react-icons/io5";

export default function Estaciones() {
    return (
        <div className="group relative bg-neutral-800 rounded-lg p-4 w-48">
            <div className="relative">
                <img
                    src="data:image/jpeg;base64,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"
                    alt="Los Temerarios"
                    className="rounded-lg"
                />
                <div className="mt-2">
                    <h3 className="text-white text-lg font-semibold">Los Temerarios</h3>
                    <p className="text-sm text-gray-400">Con Los Bukis, Los Yonic's, Los Rehenes...</p>
                </div>
            </div>

            {/* Botón de play que aparece al hacer hover */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <IoPlayCircle size={50} className="text-green-500" />
            </div>
        </div>
    );
}
