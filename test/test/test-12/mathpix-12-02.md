82
CHAPTER 2 LIMITS
- The result of Example 7 looks plausible from Figure 3.
FIGURE 3
FIGURE 4
- It is shown in Example 3 in
Section 2.4 that $\lim _{x \rightarrow 0^{+}} \sqrt{x}=0$.
Some limits are best calculated by first finding the left- and right-hand limits. The following theorem is a reminder of what we discovered in Section 2.2. It says that a two-sided limit exists if and only if both of the one-sided limits exist and are equal.
THEOREM $\quad \lim _{x \rightarrow a} f(x)=L \quad$ if and only if $\quad \lim _{x \rightarrow a^{-}} f(x)=L=\lim _{x \rightarrow a^{+}} f(x)$
When computing one-sided limits, we use the fact that the Limit Laws also hold for one-sided limits.
EXAMPLE 7 Show that $\lim _{x \rightarrow 0}|x|=0$.
SOLUTION Recall that
$$
|x|=\left\{\begin{array}{ll}
x & \text { if } x \geqslant 0 \\
-x & \text { if } x<0
\end{array}\right.
$$
Since $|x|=x$ for $x>0$, we have
$$
\lim _{x \rightarrow 0^{+}}|x|=\lim _{x \rightarrow 0^{+}} x=0
$$
For $x<0$ we have $|x|=-x$ and so
$$
\lim _{x \rightarrow 0^{-}}|x|=\lim _{x \rightarrow 0^{-}}(-x)=0
$$
Therefore, by Theorem 1 ,
$$
\lim _{x \rightarrow 0}|x|=0
$$
V EXAMPLE 8 Prove that $\lim _{x \rightarrow 0} \frac{|x|}{x}$ does not exist.
SOLUTION
$$
\begin{array}{l}
\lim _{x \rightarrow 0^{+}} \frac{|x|}{x}=\lim _{x \rightarrow 0^{+}} \frac{x}{x}=\lim _{x \rightarrow 0^{+}} 1=1 \\
\lim _{x \rightarrow 0^{-}} \frac{|x|}{x}=\lim _{x \rightarrow 0^{-}} \frac{-x}{x}=\lim _{x \rightarrow 0^{-}}(-1)=-1
\end{array}
$$
Since the right- and left-hand limits are different, it follows from Theorem 1 that $\lim _{x \rightarrow 0}|x| / x$ does not exist. The graph of the function $f(x)=|x| / x$ is shown in Figure 4 and supports the one-sided limits that we found.
EXAMPLE 9 If
$$
f(x)=\left\{\begin{array}{ll}
\sqrt{x-4} & \text { if } x>4 \\
8-2 x & \text { if } x<4
\end{array}\right.
$$
determine whether $\lim _{x \rightarrow 4} f(x)$ exists.
SOLUTION Since $f(x)=\sqrt{x-4}$ for $x>4$, we have
$$
\lim _{x \rightarrow 4^{+}} f(x)=\lim _{x \rightarrow 4^{+}} \sqrt{x-4}=\sqrt{4-4}=0
$$