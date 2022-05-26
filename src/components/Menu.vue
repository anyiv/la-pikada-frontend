<template>

    <div class="sidebar-page">
        <section class="sidebar-layout">
             <b-sidebar
                position="static"
                :mobile="mobile"
                :expand-on-hover="expandOnHover"
                :reduce="reduce"
                :delay="expandWithDelay ? 500 : null"
                type="is-light"
                open
            >
                <div class="p-1">
                    <div class="block">
                    <img
                        src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                        alt="Lightweight UI components for Vue.js based on Bulma"
                    />
                    </div>
                    <b-menu class="is-custom-mobile">
                        <b-menu-list label="Menu">
                            <router-link to="/">
                                <b-menu-item icon="information-outline" label="Inicio" ></b-menu-item>
                            </router-link>
                            <router-link to="/products"> 
                                <b-menu-item icon="settings" label="Productos" ></b-menu-item>
                            </router-link>
                            <router-link to="/personal">
                                <b-menu-item icon="account" label="Personal">
                                </b-menu-item>
                            </router-link>
                        </b-menu-list>
                    </b-menu>
                </div>
            </b-sidebar>

        </section>
    </div>

</template>

<script>
export default {
  data() {
    return {
      expandOnHover: false,
      expandWithDelay: false,
      mobile: "reduce",
      reduce: false
    };
  }
};
</script>

<style>
.prueba{
    height: 100%;
}
.p-1 {
	 padding: 1em;
}
.sidebar-content{ 
    height: 100vh !important; 
    }
.sidebar-page {
	 display: flex;
	 flex-direction: column;
     height: 100vh;
	 min-height: 100%;
}
 .sidebar-page .sidebar-layout {
	 display: flex;
	 flex-direction: row;
	 min-height: 100%;
}
 @media screen and (max-width: 1023px) {
	 .b-sidebar .sidebar-content.is-mini-mobile:not(.is-mini-expand) .menu-list li a span:nth-child(2), .b-sidebar .sidebar-content.is-mini-mobile.is-mini-expand:not(:hover):not(.is-mini-delayed) .menu-list li a span:nth-child(2) {
		 display: none;
         
	}
	 .b-sidebar .sidebar-content.is-mini-mobile:not(.is-mini-expand) .menu-list li ul, .b-sidebar .sidebar-content.is-mini-mobile.is-mini-expand:not(:hover):not(.is-mini-delayed) .menu-list li ul {
		 padding-left: 0;
         
	}
	 .b-sidebar .sidebar-content.is-mini-mobile:not(.is-mini-expand) .menu-list li ul li a, .b-sidebar .sidebar-content.is-mini-mobile.is-mini-expand:not(:hover):not(.is-mini-delayed) .menu-list li ul li a {
		 display: inline-block;
         
	}
	 .b-sidebar .sidebar-content.is-mini-mobile:not(.is-mini-expand) .menu-label:not(:last-child), .b-sidebar .sidebar-content.is-mini-mobile.is-mini-expand:not(:hover):not(.is-mini-delayed) .menu-label:not(:last-child) {
		 margin-bottom: 0;
         
	}
}
 @media screen and (min-width: 1024px) {
	 .b-sidebar .sidebar-content.is-mini:not(.is-mini-expand) .menu-list li a span:nth-child(2), .b-sidebar .sidebar-content.is-mini.is-mini-expand:not(:hover):not(.is-mini-delayed) .menu-list li a span:nth-child(2) {
		 display: none;
         
	}
	 .b-sidebar .sidebar-content.is-mini:not(.is-mini-expand) .menu-list li ul, .b-sidebar .sidebar-content.is-mini.is-mini-expand:not(:hover):not(.is-mini-delayed) .menu-list li ul {
		 padding-left: 0;
         
	}
	 .b-sidebar .sidebar-content.is-mini:not(.is-mini-expand) .menu-list li ul li a, .b-sidebar .sidebar-content.is-mini.is-mini-expand:not(:hover):not(.is-mini-delayed) .menu-list li ul li a {
		 display: inline-block;
         
	}
	 .b-sidebar .sidebar-content.is-mini:not(.is-mini-expand) .menu-label:not(:last-child), .b-sidebar .sidebar-content.is-mini.is-mini-expand:not(:hover):not(.is-mini-delayed) .menu-label:not(:last-child) {
		 margin-bottom: 0;
         
	}
}
 .is-mini-expand .menu-list a {
	 white-space: nowrap;
	 overflow: hidden;
	 text-overflow: ellipsis;
}
</style>
