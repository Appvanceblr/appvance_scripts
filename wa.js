navigateTo("https://www.apple.com/");
click(link("ac-gn-link ac-gn-link-mac"));
wait(10000,isVisible(link("ac-gn-link ac-gn-link-ipad")));
click(link("ac-gn-link ac-gn-link-ipad"));
