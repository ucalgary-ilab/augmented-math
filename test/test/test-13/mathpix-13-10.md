168
Chapter 6. Integration
Theorem 6.3.1 means that if we can find one antiderivative for a continuous function $f$ on an open interval $(a, b)$, then we can find all. More precisely, if $F$ is an antiderivative for $f$ on $(a, b)$, then all the antiderivatives for $f$ on $(a, b)$ are in the form
$$
F(x)+C, \quad a<x<b
$$
where $C$ is a constant.
Note that (6.3.1) represents a family of functions defined on $(a, b)$ - there are infinitely many of them, with each $C$ corresponds to an antiderivative for $f$ and vice versa. We call the family to be the indefinite integral of $f$ (with respect to $x$ ) and we denote it by
$$
\int f(x) \mathrm{d} x
$$
That is,
$$
\int f(x) \mathrm{d} x=F(x)+C, \quad a<x<b,
$$
where $F$ is a function such that $F^{\prime}(x)=f(x)$ for all $x \in(a, b)$ and $C$ is an arbitrary constant, called constant of integration.
Example Using the two results in the last example, we have the following:
(1) $\int x^{2} \mathrm{~d} x=\frac{1}{3} x^{3}+C, \quad-\infty<x<\infty, \quad$ where $C$ is an arbitrary constant.
(2) $\int \frac{1}{\sqrt{x}} \mathrm{~d} x=2 \sqrt{x}+C, \quad x>0, \quad$ where $C$ is an arbitrary constant.
Remark
- Sometimes, for simplicity, we write $\int x^{2} \mathrm{~d} x=\frac{1}{3} x^{3}+C$ etc.
$\diamond$ The interval $\mathbb{R}$ is omitted because it can be determined easily.
$\diamond$ The symbol $C$ is understood to be an arbitrary constant.
- Since we can use any symbol to denote the independent variable, we may also write $\int t^{2} \mathrm{~d} t=\frac{1}{3} t^{3}+C$ etc.
- Instead of a family of functions, sometimes we write $\int f(x) \mathrm{d} x$ to represent a function only. See the discussion in the Alternative Solution on page 177.
Terminology
- To integrate a function $f$ means to find the indefinite integral of $f$ (that is, to find $\int f(x) \mathrm{d} x$ if $x$ is chosen to be the independent variable).
- Same as that for definite integrals, in the notation $\int f(x) \mathrm{d} x$, the function $f$ is called the integrand.
Integration of Constant (Function) Let $k$ be a constant. Then we have
$$
\int k \mathrm{~d} x=k x+C, \quad-\infty<x<\infty
$$
Explanation As usual, $C$ is understood to be an arbitrary constant.