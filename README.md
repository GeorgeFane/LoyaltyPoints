# PointZen

## About

### Easy-to-integrate package for implementing loyalty programs, and viewing users' loyalty participation

Many websites have implemented their own loyalty points system. This project provides an easily integrable package for issuing loyalty points. All points are held within a single multi-token contract, similar to 1155. Users can view their loyalty points for all companies in a single dashboard. Loyalty points are easily accessible, such that the points can be viewed and are usable for token gating communities. Companies can use our platform for rewards in the traditional approach, granting their own users special perks or access based on points, but PointZen makes cross-promotion extremely feasible. Imagine complementary companies, like an airline firm and a hotel, where the hotel has special tiers or discounts for users based on their loyalty points with a specific airline. This would incentivize travel for the user and be an easy way for companies to ally.

Demo video: https://youtu.be/_1s-Fhqt2H0

# Code Organization

Example site with loyalty program at login.js, which displays src/login/login.js

* You get +1 loyalty point each time you sign in, mimicking LeetCode's gold for daily sign in.

Loyalty points dashboard at pages/dashboard.js, which displays src/dashboard/Dashboard.js

* Can view all loyalty points across all companies associated with yourself

src/metamask/index.js exports a 'Login with MetaMask' button.
