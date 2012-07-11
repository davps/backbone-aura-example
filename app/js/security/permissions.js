/**
 * @fileOverview Extend the aura-core permissions
 */
define(["aura_perms"], function (permissions) {
  permissions.extend({
    helloworld: {
      bootstrap:true,
    },
    helloworld2: {
      bootstrap:true,
    },
    controls: {
      bootstrap: true
    },
  });
  return permissions;
});
