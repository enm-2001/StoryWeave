<template>

<div class="main">



<div class="notification-heading">
    Notification
</div>
<main>
    <ol class="gradient-list">

        <li>
        <div class="approval">
            <div class="left-side">
               qwertyuiosdfghjklcvvfctvtyg gydvyatwbdb eeeeeeeeee Contribute to multiplayer stories, seeing only what the previous author wrote. Modeled on the game exquisite corpse, each creation is gloriously unique
            </div>
            <div class="right-side">
          <stronger>  <i class="fa fa-check" style="font-size:35px;color:green;padding-right:15px;padding-top:10px;"></i></stronger>
         <stronger>   <i class="fa fa-close" style="font-size:35px; color:red; padding-left:15px;padding-top:10px;"></i></stronger>
            </div>
        </div>
        </li>
       
       
 
 

      
    </ol>
</main>
</div>
</template>

<script>
export default {
    name: 'NotiFication'
}
</script>

<style lang="scss" scoped>
.main{
    background-image: url("../assets/background.jpg");
  background-size: cover;
  background-position: center;

  background-repeat: no-repeat;

  height: 100vh;
  width: 200vh;
}
.right-side{
    display:flex;
    margin: auto;

    justify-content:center;

}
.notification-heading {
    display: flex;
    align-items: center;
    font-size: 50px;
    font-family: Belanosima;
    font-weight: bolder;
    color: white;
    justify-content: center;

}

.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #537188;
    font-family: Belanosima;
    color: #fff;
    padding: 20px;
    font-size: 18px;
    height: 80px
        /*justify-items:start;*/
}

.navbar-logo {
    left: 20px;
    position: absolute;
    width: 60px;
    height: auto;
    margin-left: 0px;
    font-size: 50px;
}

.nav-links {
    right: 20px;
    position: absolute;
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    font-size: 20px;
}

.nav-links li {
    margin-left: 20px;
    padding: 10px;
}

.nav-links a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
}

/*** VARIABLES ***/
/* Colors */
$black: #1d1f20;
$blue: #83e4e2;
$green: #a2ed56;
$yellow: #fddc32;
$white: #fafafa;

/*** EXTEND ***/
/* box-shadow */
%boxshadow {
    box-shadow: 0.15rem 0.25rem 0.25rem 0.6rem rgba(0, 0, 0, 0.05), 0 0.5rem 1.125rem rgba(75, 0, 0, 0.05);
}

/*** STYLE ***/
*,
*:before,
*:after {
    box-sizing: border-box;
}

main {
    display: block;
    margin: 0 auto;
    padding: 1rem;
    width: 50%;
      font-family: Belanosima;
      
}

ol.gradient-list {
    counter-reset: gradient-counter;
    list-style: none;
    margin: 1.75rem 0;
    padding-left: 1rem;
    

    >li {
        background: white;
        border-radius: 0 0.5rem 0.5rem 0.5rem;
        @extend %boxshadow;
        counter-increment: gradient-counter;
        margin-top: 1rem;
        min-height: 3rem;
        padding: 1rem 1rem 1rem 3rem;
        position: relative;
        font-size: 14px;

         

        &::before,
        &::after {
            background: linear-gradient(135deg, $blue 0%, $green 100%);
            border-radius: 1rem 1rem 0 1rem;
            content: '';
            height: 3rem;
            left: -1rem;
            overflow: hidden;
            position: absolute;
            top: -1rem;
            width: 3rem;
        }

        &::before {
            align-items: flex-end;
            @extend %boxshadow;
            content: counter(gradient-counter);
            color: $black;
            display: flex;
            font: 900 1.5em/1 'Montserrat';
            justify-content: flex-end;
            padding: 0.125em 0.25em;
            z-index: 1;
        }

        @for $i from 1 through 5 {
            &:nth-child(10n+#{$i}):before {
                background: linear-gradient(135deg, rgba($green, $i * 0.2) 0%, rgba($yellow, $i * 0.2) 100%);
            }
        }

        @for $i from 6 through 10 {
            &:nth-child(10n+#{$i}):before {
                background: linear-gradient(135deg, rgba($green, 1 - (($i - 5) * 0.2)) 0%, rgba($yellow, 1 - (($i - 5) * 0.2)) 100%);
            }
        }

        +li {
            margin-top: 2rem;
        }
    }
}
</style>
