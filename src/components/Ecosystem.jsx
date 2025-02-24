import "../Ecosystem.css";
import React from "react";

const Ecosystem = () => {
    return (
        <div className="text-white flex flex-col items-center justify-center mt-20 px-10">
            <div className="contain">
                <h3 className="h1 text-4xl md:text-6xl font-bold text-center">Our Ecosystem Partners</h3>      <div className="w-full max-w-6xl">
                    <p className="title text-2xl font-semibold text-left pl-4 md:pl-0 mb-6 text-blue-500">
                        Chains
                    </p>

                    <div className="row grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                        {projects.map((project, index) => (
                            <div key={index} className="Chains-component">
                                <img src={project.image} className="Chains-img" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const projects = [
    { name: "Runes Chain", image: "https://www.layeredge.io/_next/image?url=%2Fimg%2Fpartners%2Frunes_chain.png&w=640&q=75" },
    { name: "Bitfinity EVM", image: "https://www.layeredge.io/_next/image?url=%2Fimg%2Fpartners%2Fbitfinity_evm.png&w=640&q=75" },
    { name: "Avail", image: "https://www.layeredge.io/_next/image?url=%2Fimg%2Fpartners%2Favail.png&w=640&q=75" },
    { name: "O3 Layer", image: "https://www.layeredge.io/_next/image?url=%2Fimg%2Fpartners%2Fo3_layer.png&w=640&q=75" },
    { name: "B² Network", image: "https://www.layeredge.io/_next/image?url=%2Fimg%2Fpartners%2Fb2_network.png&w=640&q=75" },
    { name: "BeFi Labs", image: "https://www.layeredge.io/_next/image?url=%2Fimg%2Fpartners%2Fbefilabs.png&w=640&q=75" },
];

export default Ecosystem;
