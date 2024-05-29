SECTION 7.3* THE NATURAL EXPONENTIAL FUNCTION
43 I
FIGURE I
$y=x$. (See Figure 1.) The domain of exp is the range of $\ln$, that is, $(-\infty, \infty)$; the range of exp is the domain of $\ln$, that is, $(0, \infty)$.
If $r$ is any rational number, then the third law of logarithms gives
$$
\ln \left(e^{r}\right)=r \ln e=r
$$
$$
\exp (r)=e^{r}
$$
Thus $\exp (x)=e^{x}$ whenever $x$ is a rational number. This leads us to define $e^{x}$, even for irrational values of $x$, by the equation
$$
e^{x}=\exp (x)
$$
In other words, for the reasons given, we define $e^{x}$ to be the inverse of the function $\ln x$. In this notation (1) becomes
$$
e^{x}=y \Longleftrightarrow \ln y=x
$$
and the cancellation equations (2) become
4
$$
e^{\ln x}=x \quad x>0
$$
5
$$
\ln \left(e^{x}\right)=x \quad \text { for all } x
$$
EXAMPLE I Find $x$ if $\ln x=5$.
SOLUTION I From (3) we see that
$$
\ln x=5 \quad \text { means } \quad e^{5}=x
$$
Therefore $x=e^{5}$.
SOLUTION 2 Start with the equation
$$
\ln x=5
$$
and apply the exponential function to both sides of the equation:
$$
e^{\ln x}=e^{5}
$$
But (4) says that $e^{\ln x}=x$. Therefore $x=e^{5}$.
V EXAMPLE 2 Solve the equation $e^{5-3 x}=10$.
SOLUTION We take natural logarithms of both sides of the equation and use (5):
$$
\begin{aligned}
\ln \left(e^{5-3 x}\right) & =\ln 10 \\
5-3 x & =\ln 10 \\
3 x & =5-\ln 10 \\
x & =\frac{1}{3}(5-\ln 10)
\end{aligned}
$$