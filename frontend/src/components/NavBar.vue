<template>
<nav class="navbar">
    <div class="logo">StoryWeave</div>
    <ul class="nav-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" class="hamburger">&#9776;</label>
        <div class="menu">
            <router-link to="/dashboard">
                <li>DashBoard</li>
            </router-link>
            <router-link to="/notification" v-if="this.$store.state.userIsAuthorized">
                <li>Notification</li>
            </router-link>
            <router-link to="/profile" v-if="this.$store.state.userIsAuthorized">
                <li>Profile</li>
            </router-link>
            <router-link to="/login" v-if="!this.$store.state.userIsAuthorized">
                <li>Login | Signup</li>
            </router-link>
            <li>
                <button @click="logout" v-if="this.$store.state.userIsAuthorized">
                    Logout
                </button>
            </li>

            <li class="services" v-if="this.$store.state.userIsAuthorized">
                <i class="fa fa-user" aria-hidden="true"></i>
                <ul class="dropdown">
                    <li>
                        <a href="/" style="color: #537188">Username: {{ this.username }}</a>
                    </li>
                    <li>
                        <a href="/" style="color: #537188">Name: {{ this.name }}</a>
                    </li>
                    <li>
                        <a href="/" style="color: #537188">Email: {{ this.email }}</a>
                    </li>
                </ul>
            </li>
        </div>
    </ul>
</nav>
</template>

<script>
import router from "../router/routes.js";
import jwt_decode from "jwt-decode";

export default {
    name: "NavBar",
    data() {
        return {
            username: "",
            name: "",
            email: "",
        };
    },
    watch: {
        $route(to, from) {

            if (to.path === "/dashboard" && from.path === "/login") {
                const token = localStorage.getItem("token");
                if (token != null) {
                    const user = jwt_decode(token);
                    this.username = user.username;
                    this.name = user.name;
                    this.email = user.email;
                }
            }
        },
    },
    methods: {
        logout() {
            localStorage.clear("token"),
                router.push("/login");
        },
    },
    mounted() {
        const token = localStorage.getItem("token");
        if (token != null) {
            const user = jwt_decode(token);
            this.username = user.username;
            this.name = user.name;
            this.email = user.email;
        }
    }

};
</script>

<style scoped>
a {
    text-decoration: none;
}

li {
    list-style: none;
}

.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: #537188;
    color: #fff;
    font-family: Belanosima;
    margin: 0px;
    z-index: 4;
    border-radius: 0px;
}

button {
    border: none;
    outline: none;
    background: none;
    padding: 0;
    margin: 0;
}

.nav-links a {
    color: #fff;
}

.logo {
    padding-left: 20px;
    font-size: 32px;
    flex-grow: 1;
}

.menu {
    display: flex;
    gap: 1em;
    font-size: 18px;
}

.menu li:hover {
    background-color: #537188;
    border-radius: 5px;
    transition: 0.3s ease;
}

.menu li {
    padding: 5px 14px;
}

.services {
    position: relative;
}

.dropdown {
    background-color: #e3f4f4;
    padding: 1em 0;
    position: absolute;
    display: none;
    border-radius: 8px;
    top: 35px;
    width: 250px;
}

.dropdown li+li {
    margin-top: 10px;
}

.dropdown li {
    padding: 0.5em 1em;
    width: 8em;
    text-align: left;
    width: 100%;
}

.dropdown li:hover {
    background-color: white;
    width: 100%;
}

.services:hover .dropdown {
    display: block;
    position: absolute;
    right: 0px;
}

input[type="checkbox"] {
    display: none;
}

.hamburger {
    display: none;
    font-size: 24px;
    user-select: none;
    padding-top: 25px;
}

@media (max-width: 768px) {
    .menu {
        display: none;
        position: absolute;
        background-color: #537188;
        right: 0;
        left: 0;
        text-align: center;
        padding: 16px 0;
    }

    .menu li:hover {
        display: inline-block;
        background-color: #537188;
        transition: 0.3s ease;
    }

    .menu li+li {
        margin-top: 12px;
    }

    input[type="checkbox"]:checked~.menu {
        display: block;
    }

  .hamburger {
    display: block;
  }
  
  .dropdown {
   
  position: absolute;
  right: 40%;
    top: 30px;
    transform: translateX(35%);
  }

    .dropdown li:hover {
        background-color: #537188;
    }
}
</style>
