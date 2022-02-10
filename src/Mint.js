import React from "react";

import nfts from "./nftsmint.gif";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default ({ login, connected, changeNftUp, changeNftDown }) => {

    return(

        <>
        
            <div className="mint-block" id="mint">

                <h2>Mint</h2>
                

                <div className="nft-box container">
                    <div className="nft-image">
                        <div className="img-nft">
                            <img src={nfts} />

                            <div className="nft-number">
                                <p>Alpha-Genesis #0</p>
                            </div>
                        </div>

                        <div className="nft-buy">
                            <div className="nft-cost">
                                <p>Price</p>
                                <p>1 Ether</p>
                            </div>

                            {connected ? (
                                <button className="btn btn-mint">Mint NFT</button>
                            ) : (
                                <button className="btn btn-mint" onClick={() => login()}>Connect Wallet</button>
                            )}
                            
                        </div>
                    </div>

                    <div className="nft-info">
                        {connected ? (
                            <button className="btn btn-primary btn-connect">Connected</button>
                        ) : (
                            <button className="btn btn-primary btn-connect" onClick={() => login()}>Connect Wallet</button>
                        )}
                        
                        <div className="nft-info-text">
                            <h3>Alpha-Genesis</h3>
                            <p>An epic array of pixel and voxel art, created through the combined effort of four talented pixel, voxel and 3D artists, paired with a solid utility, and a sound vision.</p>
                        </div>
                    </div>

                    
                </div>

            </div>
        
        </>

    );

}