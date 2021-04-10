import React from 'react';
import dCare from'../../../images/Mask Group 3.png'

const DentalCare = () => {
    return (
        <section className="d-flex justify-content-center mt-5">
          <div className="w-75 row p-3">
          <div className="col-md-6">
              <img style={{width:'95%'}} src={dCare} alt=""/>
            </div>
            <div className="col-md-6 mt-5 ">
             <h1 style={{color:'3E4558'}}>Exceptional Dental <br/> Care, on Your Terms</h1>
             <p className="mt-5 text-secondary"> it is a long established fact that a reader will be distracted by the readable content of a pagewhen looking at its layout.The point of using lorem ipsum is that it has  a more or less normal Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam alias, neque qui unde quia vero error velit, sequi veritatis non debitis iusto dolorem deserunt blanditiis magnam reprehenderit sunt recusandae incidunt sapiente minus temporibus totam architecto! Nemo porro similique itaque maxime eveniet accusantium corporis cupiditate quasi reprehenderit accusamus dolorem ullam, veniam excepturi aperiam unde iste repellendus? Quasi iure praesentium suscipit aut, voluptas incidunt quidem enim ipsum, iusto at perspiciatis explicabo dolores deserunt, officiis molestiae exercitationem vero recusandae dolorem nesciunt dolor beatae. Suscipit mollitia sed, reiciendis porro recusandae id praesentium, delectus ad non voluptatem repudiandae quod nihil, magnam vel blanditiis nulla veniam.elit. Aperiam alias, neque qui unde quia vero error velit, sequi veritatis non debitis iusto dolorem deserunt blanditiis magnam reprehenderit sunt recusandae incidunt sapiente minus temporibus totam architecto! Nemo porro similique itaque maxime eveniet accusantium corporis cupiditate quasi reprehenderit accusamus dolorem ullam, veniam excepturi aperiam unde iste repellendus? Quasi iure praesentium suscipit aut, voluptas incidunt quidem enim ipsum, iusto at perspiciatis explicabo dolores deserunt, officiis molestiae exercitationem vero recusandae dolorem nesciunt dolor beatae. Suscipit mollitia sed, reiciendis porro recusandae id praesentium, delectus ad non voluptatem repudiandae quod</p>
             <button class="btn btn-primary mt-5">Learn More</button>
            </div>
          </div>

        </section>
    );
};

export default DentalCare;