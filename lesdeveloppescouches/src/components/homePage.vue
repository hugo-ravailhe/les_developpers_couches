<template>
    <div>
        <div class="heading-container">
            <div>
                <p class="title">
                    CooPeer.
                </p>              
            </div>
            <div>
                <img src="../assets/undraw_online_learning_re_qw08.svg"  class="logo" alt="Logo CooPeer">
            </div>
            <div>
                <p class="description">
                    Le seul service d'aide aux devoirs fait par les étudiants pour les étudiants !
                </p>
            </div>
            <div>
                <button class="sign-in">Se Connecter</button>
                <button class="sign-up">S'inscrire</button>
            </div>
        </div>
        <div class="body-container">
            <div>
                <p class="body">
                    Trouve des élèves qui peuvent t’aider !
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'homePage',
  components: {
  }
}
</script>
<style scoped>
.heading-container {
position: absolute;
width: 17.375rem;
height: 13.06rem;
left: 2.1rem;
top: 2rem;
}

.title {
position: absolute;
width: 17.25rem;
height: 2.75rem;
left: 2rem;
top: 1rem;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 4rem;
line-height: 115%;
/* identical to box height, or 44px */
letter-spacing: -0.019em;

color: #272742;
}

.description {
position: absolute;
width: 22rem;
height: 3rem;
left: 2.1rem;
top: 18rem;

font-family: 'Inter';
font-style: normal;
text-align: justify;
font-weight: 400;
font-size: 1.875rem;
line-height: 2rem;
/* or 171% */
letter-spacing: -0.006em;

color: #272742;

}

.logo{
position: absolute;
width: 300px;
height: 300px;
left: 825px; 
top: 10rem;
}

.sign-in{
position: absolute;
width: 217px;
height: 49px;
left: 325px;
top: 500px;
border-radius: 28px;
background-color: #272742;
color: white;
}

.sign-up{
position: absolute;
width: 217px;
height: 49px;
left: 625px;
top: 500px;
border-radius: 28px;
background-color: #272742;
color: white;

}


.body{
position: absolute;
width: 331px;
height: 47px;
left: 30px;
top: 1000px;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 38px;
line-height: 115%;
/* or 44px */
letter-spacing: -0.019em;

color: #000000;
}

</style>