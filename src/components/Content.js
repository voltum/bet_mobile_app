import React from 'react'
import main_text_img from '../img/placebets_text.png';
import balls_img from '../img/balls.png';
import main_btn_img from '../img/main_btn.png';

function Content() {
    return (
        <div className="content">
            <img src={main_text_img} className="main_text_img" />
            <div className="main_btn_block">
                <img src={balls_img} className="balls_img" />
                <a href="#" className="main_btn"><img src={main_btn_img} /></a>
            </div>
        </div>
    )
}

export default Content
