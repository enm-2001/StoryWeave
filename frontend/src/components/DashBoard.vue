<template>
    <div class="header">
        <div class="header-image">
            <div class="solidc">
            </div>
            <div class="header-content">
                <div class="logo">
                    <img src="../assets/logof.png" alt="Company Logo" />
                </div>
                <div class="text">
                    <h1>A collaborative creative writing app where stories are built line by line. </h1>
                    <h4>Contribute to multiplayer stories, seeing only what the previous author wrote.</h4>
                    <router-link to="/startstory"><button>Start Story</button></router-link>
                </div>
            </div>
        </div>
    </div>
    <DashboardBottom />
    </template>
    <script>
    import DashboardBottom from './DashboardBottom.vue';
    export default {
        name: 'DashBoard',
        components: {
            DashboardBottom,
        }
    }
    </script>
    <style scoped>
    @media only screen and (min-width: 992px) {
        .header {
            background-image: url("../assets/2.jpeg");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            width: 100%;
        }
        .solidc {
            background-color: #537188;
        }
        .header-image {
            position: relative;
            height: 70vh;
            overflow: hidden;
        }
        .header-content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            color: black;
            font-weight: bolder
        }
        .logo {
            margin-bottom: 5px;
        }
        .logo img {
            max-width: 300px;
            height: auto;
        }
        .text {
            margin-bottom: 20px;
            font-family: Belanosima;
            font-weight: bolder;
        }
        .text h1 {
            margin-bottom: 20px;
            font-family: Belanosima;
            font-weight: bolder;
            font-size: 30px;
        }
        .text h4 {
            margin-bottom: 20px;
            font-family: Belanosima;
            font-weight: bold;
            font-size: 20px;
        }
        button {
            background-color: #6096B4;
            color: white;
            border: none;
            padding: 12px 12px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 17px;
            border-radius: 5px;
            cursor: pointer;
            font-weight: light;
            border-radius: 10px;
        }
        .header-image img {
            width: 100%;
            height: auto;
            object-fit: cover;
        }
    }
    @media only screen and (min-width: 768px) {
        .header {
            background-image: url("../assets/2.jpeg");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            width: 100%;
        }
        .solidc {
            background-color: #537188;
        }
        .header-image {
            position: relative;
            height: 60vh;
            overflow: hidden;
        }
        .header-content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            color: black;
            font-weight: bolder
        }
        .logo {
            margin-bottom: 5px;
        }
        .logo img {
            max-width: 200px;
            height: auto;
        }
        .text {
            margin-bottom: 20px;
            font-family: Belanosima;
            font-weight: bolder;
        }
        .text h1 {
            margin-bottom: 20px;
            font-family: Belanosima;
            font-weight: bolder;
            font-size: 20px;
        }
        .text h4 {
            margin-bottom: 20px;
            font-family: Belanosima;
            font-size: 20px;
        }
        button {
            background-color: #6096B4;
            color: white;
            border: none;
            padding: 8px 8px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 17px;
            border-radius: 5px;
            cursor: pointer;
            font-weight: light;
            border-radius: 10px;
            margin-bottom: 15px;
        }
        .header-image img {
            width: 100%;
            height: auto;
            object-fit: cover;
        }
    }
    @media only screen and (min-width: 600px) {
        .header {
            background-image: url("../assets/2.jpeg");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            width: 100%;
        }
        .solidc {
            background-color: #537188;
        }
        .header-image {
            position: relative;
            height: 60vh;
            overflow: hidden;
        }
        .header-content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            color: black;
            font-weight: bolder
        }
        .logo {
            margin-bottom: 5px;
        }
        .logo img {
            max-width: 200px;
            height: auto;
        }
        .text {
            margin-bottom: 20px;
            font-family: Belanosima;
            font-weight: bolder;
        }
        .text h1 {
            margin-bottom: 20px;
            font-family: Belanosima;
            font-weight: bolder;
            font-size: 20px;
        }
        .text h4 {
            margin-bottom: 20px;
            font-family: Belanosima;
            font-size: 15px;
        }
        button {
            background-color: #6096B4;
            color: white;
            border: none;
            padding: 8px 8px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 17px;
            border-radius: 5px;
            cursor: pointer;
            font-weight: light;
            border-radius: 10px;
            margin-bottom: 15px;
        }
        .header-image img {
            width: 100%;
            height: auto;
            object-fit: cover;
        }
    }

    @media only screen and (max-width: 600px) {
        .header {
            background-image: url("../assets/2.jpeg");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            width: 100%;
        }
        .solidc {
            background-color: #537188;
        }
        .header-image {
            position: relative;
            height: 60vh;
            overflow: hidden;
        }
        .header-content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            color: black;
            font-weight: bolder
        }
        .logo {
            margin-bottom: 5px;
        }
        .logo img {
            max-width: 200px;
            height: auto;
        }
        .text {
            margin-bottom: 20px;
            font-family: Belanosima;
            font-weight: bolder;
        }
        .text h1 {
            margin-bottom: 20px;
            font-family: Belanosima;
            font-weight: bolder;
            font-size: 20px;
        }
        .text h4 {
            margin-bottom: 20px;
            font-family: Belanosima;
            font-size: 15px;
        }
        button {
            background-color: #6096B4;
            color: white;
            border: none;
            padding: 8px 8px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 17px;
            border-radius: 5px;
            cursor: pointer;
            font-weight: light;
            border-radius: 10px;
            margin-bottom: 15px;
        }
        .header-image img {
            width: 100%;
            height: auto;
            object-fit: cover;
        }
    }
    </style>
