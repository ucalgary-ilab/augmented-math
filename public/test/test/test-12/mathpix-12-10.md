SECTION 8.4 INTEGRATION OF RATIONAL FUNCTIONS BY PARTIAL FRACTIONS
513
would use
$$
\frac{A_{1}}{a_{1} x+b_{1}}+\frac{A_{2}}{\left(a_{1} x+b_{1}\right)^{2}}+\cdots+\frac{A_{r}}{\left(a_{1} x+b_{1}\right)^{r}}
$$
By way of illustration, we could write
$$
\frac{x^{3}-x+1}{x^{2}(x-1)^{3}}=\frac{A}{x}+\frac{B}{x^{2}}+\frac{C}{x-1}+\frac{D}{(x-1)^{2}}+\frac{E}{(x-1)^{3}}
$$
but we prefer to work out in detail a simpler example.
EXAMPLE 4 Find $\int \frac{x^{4}-2 x^{2}+4 x+1}{x^{3}-x^{2}-x+1} d x$.
SOLUTION The first step is to divide. The result of long division is
$$
\frac{x^{4}-2 x^{2}+4 x+1}{x^{3}-x^{2}-x+1}=x+1+\frac{4 x}{x^{3}-x^{2}-x+1}
$$
The second step is to factor the denominator $Q(x)=x^{3}-x^{2}-x+1$. Since $Q(1)=0$, we know that $x-1$ is a factor and we obtain
$$
\begin{aligned}
x^{3}-x^{2}-x+1 & =(x-1)\left(x^{2}-1\right)=(x-1)(x-1)(x+1) \\
& =(x-1)^{2}(x+1)
\end{aligned}
$$
Since the linear factor $x-1$ occurs twice, the partial fraction decomposition is
$$
\frac{4 x}{(x-1)^{2}(x+1)}=\frac{A}{x-1}+\frac{B}{(x-1)^{2}}+\frac{C}{x+1}
$$
Multiplying by the least common denominator, $(x-1)^{2}(x+1)$, we get
$$
\begin{aligned}
4 x & =A(x-1)(x+1)+B(x+1)+C(x-1)^{2} \\
& =(A+C) x^{2}+(B-2 C) x+(-A+B+C)
\end{aligned}
$$
- Another method for finding the coefficients: Put $x=1$ in $(8): B=2$.
Put $x=-1: C=-1$.
Put $x=0: A=B+C=1$.
Now we equate coefficients:
$$
\begin{array}{r}
A \quad C=0 \\
B-2 C=4 \\
-A+B+C=0
\end{array}
$$
Solving, we obtain $A=1, B=2$, and $C=-1$, so
$$
\begin{aligned}
\int \frac{x^{4}-2 x^{2}+4 x+1}{x^{3}-x^{2}-x+1} d x & =\int\left[x+1+\frac{1}{x-1}+\frac{2}{(x-1)^{2}}-\frac{1}{x+1}\right] d x \\
& =\frac{x^{2}}{2}+x+\ln |x-1|-\frac{2}{x-1}-\ln |x+1|+K \\
& =\frac{x^{2}}{2}+x-\frac{2}{x-1}+\ln \left|\frac{x-1}{x+1}\right|+K
\end{aligned}
$$