<template>
<div class="">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" :to="{name:'home'}">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name:'about'}" class="nav-link" >About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'contact'}">Contact</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name:'users'}" class="nav-link">Users</router-link>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav></div>
<router-view/>
</template>