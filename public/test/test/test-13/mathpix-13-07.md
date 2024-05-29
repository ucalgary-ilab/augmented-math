118
Chapter 4. Differentiation
Proof The proof is similar to that for the product rule.
Example Let $y=\frac{x^{2}+3 x-4}{2 x+1}$. Find $\frac{\mathrm{d} y}{\mathrm{~d} x}$.
Solution $\frac{\mathrm{d} y}{\mathrm{~d} x}=\frac{\mathrm{d}}{\mathrm{d} x}\left(\frac{x^{2}+3 x-4}{2 x+1}\right)$
$$
=\frac{(2 x+1) \cdot \frac{\mathrm{d}}{\mathrm{d} x}\left(x^{2}+3 x-4\right)-\left(x^{2}+3 x-4\right) \cdot \frac{\mathrm{d}}{\mathrm{d} x}(2 x+1)}{(2 x+1)^{2}} \quad \text { Quotient Rule }
$$
$$
=\frac{(2 x+1)(2 x+3)-\left(x^{2}+3 x-4\right)(2)}{(2 x+1)^{2}} \quad \text { Derivative of Polynomial }
$$
$$
\begin{array}{l}
=\frac{\left(4 x^{2}+8 x+3\right)-\left(2 x^{2}+6 x-8\right)}{(2 x+1)^{2}} \\
=\frac{2 x^{2}+2 x+11}{(2 x+1)^{2}}
\end{array}
$$
Power Rule for Differentiation (negative integer version) Let $n$ be a negative integer. Then the power function $x^{n}$ is differentiable on $\mathbb{R} \backslash\{0\}$ and we have
$$
\frac{\mathrm{d}}{\mathrm{d} x} x^{n}=n x^{n-1}
$$
Explanation Since $n$ is a negative integer, it can be written as $-m$ where $m$ is a positive integer. The function $x^{n}=x^{-m}=\frac{1}{x^{m}}$ is defined for all $x \neq 0$, that is, the domain of $x^{n}$ is $\mathbb{R} \backslash\{0\}$.
Proof Let $f: \mathbb{R} \backslash\{0\} \longrightarrow \mathbb{R}$ be the function given by $f(x)=x^{-m}$, where $m=-n$. By definition, we have
$$
\begin{array}{l}
f^{\prime}(x)=\frac{\mathrm{d}}{\mathrm{d} x} \frac{1}{x^{m}} \\
=\frac{x^{m} \cdot \frac{\mathrm{d}}{\mathrm{d} x} 1-1 \cdot \frac{\mathrm{d}}{\mathrm{d} x} x^{m}}{\left(x^{m}\right)^{2}} \quad \text { Quotient Rule } \\
=\frac{x^{m} \cdot 0-1 \cdot m x^{m-1}}{x^{2 m}} \quad \begin{array}{l}
\text { Derivative of Constant \& } \\
\text { Power Rule (positive integer version) }
\end{array} \\
=-m x^{(m-1)-2 m} \\
=-m x^{-m-1} \\
=n x^{n-1} \\
\end{array}
$$
Example Find an equation for the tangent line to the curve $y=\frac{3 x^{2}-1}{x}$ at the point (1,2).
Explanation The curve is given by $y=f(x)$ where $f(x)=\frac{3 x^{2}-1}{x}$. Since $f(1)=2$, the point $(1,2)$ lies on the curve. To find an equation for the tangent line, we have to find the slope at the point (and then use point-slope form). The slope at the point $(1,2)$ is $f^{\prime}(1)$. We can use rules for differentiation to find $f^{\prime}(x)$ and then substitute $x=1$ to get $f^{\prime}(1)$.
Solution To find $\frac{\mathrm{d} y}{\mathrm{~d} x}$, we can use quotient rule or term by term differentiation.