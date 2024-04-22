import React from 'react'

const Profile = () => {
  return (
    <section class="vh-100">
        <div class="container mt-5">
          <div class="row">
            <div class="col col-md-9 col-lg-7 col-xl-5">
              <div class="card">
                <div class="card-body p-4 text-black">
                  
                  <div class="d-flex align-items-center mb-4">
                    <div class="flex-shrink-0 profile-image-container">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp"
                        alt="Generic placeholder image" class="img-fluid rounded-circle border border-dark border-3"/>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <div class="d-flex flex-row align-items-center">
                        <h5 class="mb-0 me-2">Jesna James</h5>
                       
                      </div>
                      <div>
                        <p class="mb-0 me-2 text-muted">jesnajames@gmail.com</p>
                      </div>
                    </div>
                    <div class="">
                        <p class="float-end" ><i class="fa-solid fa-gear"></i></p>
                    </div>

                  </div>
                  <hr/>
                  <p class="my-4 pb-1">52 comments</p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Profile
