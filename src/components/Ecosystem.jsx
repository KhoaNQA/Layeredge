import "../Ecosystem.css";
import React from "react";
import logo from '../assets/logo.png';
import { RiMediumLine } from "react-icons/ri";
import { LiaTelegram } from "react-icons/lia";
import { RxDiscordLogo } from "react-icons/rx";
import { FaXTwitter } from "react-icons/fa6";

const Ecosystem = () => {
    return (
        <div className="text-white flex flex-col items-center justify-center mt-20 px-10">
            <div className="contain">
                <h3 className="h1 text-4xl md:text-6xl font-bold text-center">Our Ecosystem Partners</h3>
                <div className="component-section w-full max-w-6x2">
                    <p className="title text-2xl font-semibold text-left pl-4 md:pl-0 mb-6 text-blue-500">Chains</p>
                    <div className="row grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                        {projects.map((project, index) => (
                            <div key={index} className="Chains-component">
                                <img src={project.image} className="Chains-img" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="component-section w-full max-w-6xl">
                    <p className="title title2 text-2xl font-semibold text-left pl-4 md:pl-0 mb-6 text-blue-500">ZK Provers</p>
                    <div className="row grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                        {ZK.map((ZK, index) => (
                            <div key={index} className="Chains-component">
                                <img src={ZK.image} className="Chains-img" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="component-section w-full max-w-6xl">
                    <p className="title title3 text-2xl font-semibold text-left pl-4 md:pl-0 mb-6 text-blue-500">AI</p>
                    <div className="row grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                        {AI.map((AI, index) => (
                            <div key={index} className="Chains-component">
                                <img src={AI.image} className="Chains-img" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="component-section w-full max-w-6xl">
                    <p className="title title3 text-2xl font-semibold text-left pl-4 md:pl-0 mb-6 text-blue-500">AI</p>
                    <div className="row grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                        {zkVM.map((zk, index) => (
                            <div key={index} className="Chains-component">
                                <img src={zk.image} className="Chains-img" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="component-section w-full max-w-6xl">
                    <p className="title title4 text-2xl font-semibold text-left pl-4 md:pl-0 mb-6 text-blue-500">DA</p>
                    <div className="row grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                        {DA.map((DA, index) => (
                            <div key={index} className="Chains-component">
                                <img src={DA.image} className="Chains-img" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="component-section w-full max-w-6xl">
                    <p className="title title5 text-2xl font-semibold text-left pl-4 md:pl-0 mb-6 text-blue-500">RAAS</p>
                    <div className="row grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                        {RAAS.map((RAAS, index) => (
                            <div key={index} className="Chains-component">
                                <img src={RAAS.image} className="Chains-img" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="component-section w-full max-w-6xl">
                    <p className="title title6 text-2xl font-semibold text-left pl-4 md:pl-0 mb-6 text-blue-500">DEPIN</p>
                    <div className="row grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                        {DEPIN.map((DEPIN, index) => (
                            <div key={index} className="Chains-component">
                                <img src={DEPIN.image} className="Chains-img" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="component-section w-full max-w-6xl">
                    <p className="title title7 text-2xl font-semibold text-left pl-4 md:pl-0 mb-6 text-blue-500">RWA</p>
                    <div className="row grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                        {RWA.map((RWA, index) => (
                            <div key={index} className="Chains-component">
                                <img src={RWA.image} className="Chains-img" />
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

const ZK = [
    { name: "Runes Chain", image: "https://www.layeredge.io/img/partners/snark.svg" },
    { name: "Bitfinity EVM", image: "https://www.layeredge.io/_next/image?url=%2Fimg%2Fpartners%2Ffermah.png&w=640&q=75" },
    { name: "O3 Layer", image: "https://www.layeredge.io/_next/image?url=%2Fimg%2Fpartners%2Fcysic.png&w=640&q=75" },
];

const AI = [
    { name: "Runes Chain", image: "https://www.layeredge.io/_next/image?url=%2Fimg%2Fpartners%2Fmintair.png&w=640&q=75" },
    { name: "Bitfinity EVM", image: "https://www.layeredge.io/_next/image?url=%2Fimg%2Fpartners%2Fsupersight.png&w=640&q=75" },
    { name: "O3 Layer", image: "https://www.layeredge.io/_next/image?url=%2Fimg%2Fpartners%2Fplayai.png&w=640&q=75" },
    { name: "B² Network", image: "https://www.layeredge.io/_next/image?url=%2Fimg%2Fpartners%2Fquillai.png&w=640&q=75" },
];

const zkVM = [
    { name: "Runes Chain", image: "https://www.layeredge.io/_next/image?url=%2Fimg%2Fpartners%2Fnexus_zkvm.png&w=640&q=75" },
    { name: "Bitfinity EVM", image: "https://www.layeredge.io/_next/image?url=%2Fimg%2Fpartners%2Fzkm.png&w=640&q=75" },
    { name: "O3 Layer", image: "https://www.layeredge.io/_next/image?url=%2Fimg%2Fpartners%2Fsuccinct.png&w=640&q=75" },
    { name: "B² Network", image: "https://www.layeredge.io/_next/image?url=%2Fimg%2Fpartners%2Fgroth16.png&w=640&q=75" },
];

const DA = [
    { name: "Runes Chain", image: "https://www.layeredge.io/_next/image?url=%2Fimg%2Fpartners%2Fnubit.png&w=384&q=75" },
    { name: "Bitfinity EVM", image: "https://www.layeredge.io/_next/image?url=%2Fimg%2Fpartners%2Forochi.png&w=3840&q=75" },
];

const RAAS = [
    { name: "Runes Chain", image: "https://www.layeredge.io/img/partners/zeeve.svg" },
    { name: "Bitfinity EVM", image: "https://www.layeredge.io/_next/image?url=%2Fimg%2Fpartners%2Fnexus.png&w=828&q=75" },
];

const DEPIN = [
    { name: "Runes Chain", image: "https://www.layeredge.io/_next/image?url=%2Fimg%2Fpartners%2Fu2u_network.png&w=828&q=75" },
];

const RWA = [
    { name: "Runes Chain", image: "https://www.layeredge.io/_next/image?url=%2Fimg%2Fpartners%2Fkalp.png&w=828&q=75" },
];




export default Ecosystem;
