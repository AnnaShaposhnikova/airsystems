<template>
  <div class="accordion" role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button v-b-toggle.accordion-2 variant="info">
          {{ link }}
        </b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <slot></slot>
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
import {BCard, BCardHeader, BCardBody, BCardText, BButton, BCollapse} from 'bootstrap-vue';
export default {
  name: 'NavDropdownCard',
  props: {
    link: String,
  },
};
</script>
