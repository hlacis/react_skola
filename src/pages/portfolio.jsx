import React from 'react';
import './portfolio.css';
import Carousel from '../components/carousels/carousel';


function Portfolio() {
    return (
        <div>
            <section id="section1">
                <h2>Sekce 1</h2>
                {"\n" +
                    "Krysa, drobný hlodavec z rodu Ratus,\n" +
                    "\n" +
                    "je známá svou schopností přizpůsobit se různým prostředím a rychlým rozmnožováním.\n" +
                    "\n" +
                    "I přesto, že jsou někdy vnímány jako škůdci,\n" +
                    "\n" +
                    "mají své místo v ekosystému a jsou studované pro pochopení chování a genetiky."}
            </section>
            <section id="section2">
                <h2>Sekce 2</h2>
                {<section className="Skills">
                    <h2>Dosažené Dovednosti</h2>
                    <div className="Skill" title="JavaScript">
                        JavaScript
                    </div>
                    <div className="Skill" title="React.js">
                        React.js
                    </div>
                    <div className="Skill" title="CSS">
                        CSS
                    </div>
                    <div className="Skill" title="HTML">
                        HTML
                    </div>
                </section>}
            </section>
            <section id="section3">
                <h2>Sekce 3</h2>
                {< Carousel/>}
            </section>
        </div>
    );
}
export default Portfolio;