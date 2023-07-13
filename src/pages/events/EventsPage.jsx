import React from 'react'
import '../events/EventsPage.css'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useCollapse } from 'react-collapsed'


function EventsPage() {
  const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
  return (
    <div>
      {/*main container*/}
      <div className="event-page-container">

          {/*content section*/}
              <h1>Explore IEEE Student Branch DITU</h1>
              <br />
              <p className="event-content-section">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque facilis dolores,
                  labore accusamus repellendus, suscipit nam dolor itaque voluptatum incidunt ipsum,
                  asperiores error amet hic magnam explicabo culpa magni expedita!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores corporis provident explicabo maxime
                  voluptatum. Ut, repellendus nostrum id sunt aperiam assumenda, ab, perspiciatis delectus a voluptatum
                  provident dolorem incidunt explicabo.
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi adipisci magni mollitia neque inventore
                  vero blanditiis, quasi aliquam cupiditate optio. Sequi pariatur perferendis similique rerum veritatis id
                  totam harum ad!</p>
              <br />
          {/*content section close*/}

          <h1>Workshop</h1>
          {/*event horizontal cards section*/}
          <div className="event-hori-cards-container">
                
                {/*card slider*/}
                <Carousel responsive={responsive}>
                    <div>
                        {/*cards */}
                        <div className="hori-card">
                            {/*image*/}
                            <div className="image">
                                <img src="https://picsum.photos/200/300" alt="image" />
                            </div>
                            {/*description*/}
                            <div className="des">
                                <h3>title Here</h3>
                                <br />
                                <h5>Coordinator</h5>
                                <h5>Speaker</h5>
                                <h5>Date</h5>
                                <br />
                                {/*button*/}
                                <a href='_blank' className="hori-card-btn">Read More</a>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        {/*cards */}
                        <div className="hori-card">
                            {/*image*/}
                            <div className="image">
                                <img src="https://picsum.photos/200/300" alt="image" />
                            </div>
                            {/*description*/}
                            <div className="des">
                                <h3>title Here</h3>
                                <br />
                                <h5>Coordinator</h5>
                                <h5>Speaker</h5>
                                <h5>Date</h5>
                                <br />
                                {/*button*/}
                                <a href='_blank' className="hori-card-btn">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div>
                        {/*cards */}
                        <div className="hori-card">
                            {/*image*/}
                            <div className="image">
                                <img src="https://picsum.photos/200/300" alt="image" />
                            </div>
                            {/*description*/}
                            <div className="des">
                                <h3>title Here</h3>
                                <br />
                                <h5>Coordinator</h5>
                                <h5>Speaker</h5>
                                <h5>Date</h5>
                                <br />
                                {/*button*/}
                                <a href='_blank' className="hori-card-btn">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div>
                        {/*cards */}
                        <div className="hori-card">
                            {/*image*/}
                            <div className="image">
                                <img src="https://picsum.photos/200/300" alt="image" />
                            </div>
                            {/*description*/}
                            <div className="des">
                                <h3>title Here</h3>
                                <br />
                                <h5>Coordinator</h5>
                                <h5>Speaker</h5>
                                <h5>Date</h5>
                                <br />
                                {/*button*/}
                                <a href='_blank' className="hori-card-btn">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div>
                        {/*cards */}
                        <div className="hori-card">
                            {/*image*/}
                            <div className="image">
                                <img src="https://picsum.photos/200/300" alt="image" />
                            </div>
                            {/*description*/}
                            <div className="des">
                                <h3>title Here</h3>
                                <br />
                                <h5>Coordinator</h5>
                                <h5>Speaker</h5>
                                <h5>Date</h5>
                                <br />
                                {/*button*/}
                                <a href='_blank' className="hori-card-btn">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div>
                        {/*cards */}
                        <div className="hori-card">
                            {/*image*/}
                            <div className="image">
                                <img src="https://picsum.photos/200/300" alt="image" />
                            </div>
                            {/*description*/}
                            <div className="des">
                                <h3>title Here</h3>
                                <br />
                                <h5>Coordinator</h5>
                                <h5>Speaker</h5>
                                <h5>Date</h5>
                                <br />
                                {/*button*/}
                                <a href='_blank' className="hori-card-btn">Read More</a>
                            </div>
                        </div>
                    </div>


                </Carousel>
          </div>
          <br />
          {/*event horizontal cards section close*/}

          <h1>Youthopia</h1>
          {/*event vertical cards section*/}
          <div className="event-ver-cards-container">
              
              {/*cards*/}
              <div className="ver-card">
                  {/*image*/}
                  <div className="image">
                      <img src="https://picsum.photos/200/300" alt="image" />
                  </div>
                  {/*description*/}
                  <div className="des">
                      <h3>title Here</h3>
                      <br />
                      <h5>Coordinator</h5>
                      <h5>Speaker</h5>
                      <h5>Date</h5>
                      <br />
                      <p className="text">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestiae mollitia, deserunt tenetur
                          fugiat inventore nesciunt minima sequi ab dolores repudiandae quo obcaecati blanditiis eos nostrum?
                          Assumenda mollitia eveniet expedita!
                          <span className="dots">. . .</span>
                          <span className="moreText">
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae enim neque rerum excepturi ullam
                              architecto, nobis expedita porro temporibus eveniet quidem dolores magnam natus, harum distinctio
                              tenetur sint facilis optio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Error reiciendis a
                              quos odio sapiente, totam temporibus aspernatur, praesentium dolorum, ut cumque iure sed? Suscipit,
                              vero? Laudantium adipisci quisquam incidunt inventore!
                          </span>
                      </p>
                      <br />
                      {/*button*/}
                      <button className="ver-card-btn">Read More</button>
                  </div>
              </div>
              {/*cards close*/}

              {/*cards*/}
              <div className="ver-card">
                  {/*image*/}
                  <div className="image">
                      <img src="https://picsum.photos/200/300" alt="image" />
                  </div>
                  {/*description*/}
                  <div className="des">
                      <h3>title Here</h3>
                      <br />
                      <h5>Coordinator</h5>
                      <h5>Speaker</h5>
                      <h5>Date</h5>
                      <br />
                      <p className="text">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestiae mollitia, deserunt tenetur
                          fugiat inventore nesciunt minima sequi ab dolores repudiandae quo obcaecati blanditiis eos nostrum?
                          Assumenda mollitia eveniet expedita!
                          <span className="dots">. . .</span>
                          <span className="moreText">
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae enim neque rerum excepturi ullam
                              architecto, nobis expedita porro temporibus eveniet quidem dolores magnam natus, harum distinctio
                              tenetur sint facilis optio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Error reiciendis a
                              quos odio sapiente, totam temporibus aspernatur, praesentium dolorum, ut cumque iure sed? Suscipit,
                              vero? Laudantium adipisci quisquam incidunt inventore!
                          </span>
                      </p>
                      <br />
                      {/*button*/}
                      <button className="ver-card-btn">Read More</button>
                  </div>
              </div>
              {/*cards close*/}
          </div>
          {/*event vertical cards section close*/}
      </div>
    </div>
  )
}

export default EventsPage
