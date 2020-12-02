import React from 'react'
import './DivAnimation.css'

export default function(){
    return (
        <div className="container">
            <div className="box">
                <div className="content">
                    <h2>Water Wave Div</h2>
                    <p>Lorem Ipsum é simplesmente um texto fictício da 
                        indústria de impressão e composição. Lorem Ipsum tem 
                        sido o texto fictício padrão da indústria desde os 
                        anos 1500, quando um impressor desconhecido pegou uma 
                        galé do tipo e embaralhou para fazer um livro de 
                        amostra de tipos. Ele sobreviveu não apenas cinco 
                        séculos, mas também ao salto para a composição eletrônica, 
                        permanecendo essencialmente inalterado.</p>
                </div>
            </div>
        <svg>
            <filter id="wavy">
                <feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="2">
                    <animate attributeName="baseFrequency" dur="60s" values="0.02;0.05.0.02" 
                    repeatCount="indefinite"/>
                </feTurbulence>
                <feDisplacementMap in="SourceGraphic" scale="30"/>
            </filter>
        </svg>
        </div>
    )
}