- A computer or graphing calculator finds the regression line by the method of least squares, which is to minimize the sum of the squares of the vertical distances between the data points and the line. The details are explained in Section 14.7. called linear regression. If we use a graphing calculator, we enter the data from Table 1 into the data editor and choose the linear regression command. (With Maple we use the fit[leastsquare] command in the stats package; with Mathematica we use the Fit command.) The machine gives the slope and $y$-intercept of the regression line as

$$
m=1.55192 \quad b=-2734.55
$$

So our least squares model for the $\mathrm{CO}_{2}$ level is

$$
C=1.55192 t-2734.55
$$

In Figure 6 we graph the regression line as well as the data points. Comparing with Figure 5, we see that it gives a better fit than our previous linear model.

![](https://cdn.mathpix.com/cropped/2023_03_05_8506f9d0e6d9cd9ef569g-1.jpg?height=500&width=796&top_left_y=782&top_left_x=898)

The regression line

V EXAMPLE 3 Use the linear model given by Equation 2 to estimate the average $\mathrm{CO}_{2}$ level for 1987 and to predict the level for the year 2010. According to this model, when will the $\mathrm{CO}_{2}$ level exceed 400 parts per million?

solUtiON Using Equation 2 with $t=1987$, we estimate that the average $\mathrm{CO}_{2}$ level in 1987 was

$$
C(1987)=(1.55192)(1987)-2734.55 \approx 349.12
$$

This is an example of interpolation because we have estimated a value between observed values. (In fact, the Mauna Loa Observatory reported that the average $\mathrm{CO}_{2}$ level in 1987 was $348.93 \mathrm{ppm}$, so our estimate is quite accurate.)

With $t=2010$, we get

$$
C(2010)=(1.55192)(2010)-2734.55 \approx 384.81
$$

So we predict that the average $\mathrm{CO}_{2}$ level in the year 2010 will be $384.8 \mathrm{ppm}$. This is an example of extrapolation because we have predicted a value outside the region of observations. Consequently, we are far less certain about the accuracy of our prediction.

Using Equation 2, we see that the $\mathrm{CO}_{2}$ level exceeds $400 \mathrm{ppm}$ when

$$
1.55192 t-2734.55>400
$$

Solving this inequality, we get

$$
t>\frac{3134.55}{1.55192} \approx 2019.79
$$