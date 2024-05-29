SECTION 7.5 EXPONENTIAL GROWTH AND DECAY
449
FIGURE I
A model for world population growth in the second half of the 20 th century
RADIOACTIVE DECAY
Radioactive substances decay by spontaneously emitting radiation. If $m(t)$ is the mass remaining from an initial mass $m_{0}$ of the substance after time $t$, then the relative decay rate
$$
-\frac{1}{m} \frac{d m}{d t}
$$
has been found experimentally to be constant. (Since $d m / d t$ is negative, the relative decay rate is positive.) It follows that
$$
\frac{d m}{d t}=k m
$$
where $k$ is a negative constant. In other words, radioactive substances decay at a rate proportional to the remaining mass. This means that we can use (2) to show that the mass decays exponentially:
$$
m(t)=m_{0} e^{k t}
$$
Physicists express the rate of decay in terms of half-life, the time required for half of any given quantity to decay.
V EXAMPLE 2 The half-life of radium-226 is 1590 years.
(a) A sample of radium-226 has a mass of $100 \mathrm{mg}$. Find a formula for the mass of the sample that remains after $t$ years.
(b) Find the mass after 1000 years correct to the nearest milligram.
(c) When will the mass be reduced to $30 \mathrm{mg}$ ?
SOLUTION
(a) Let $m(t)$ be the mass of radium-226 (in milligrams) that remains after $t$ years. Then $d m / d t=k m$ and $y(0)=100$, so (2) gives
$$
m(t)=m(0) e^{k t}=100 e^{k t}
$$
In order to determine the value of $k$, we use the fact that $y(1590)=\frac{1}{2}(100)$. Thus
$$
100 e^{1590 k}=50 \quad \text { so } \quad e^{1590 k}=\frac{1}{2}
$$
and
$$
\begin{aligned}
1590 k & =\ln \frac{1}{2}=-\ln 2 \\
k & =-\frac{\ln 2}{1590}
\end{aligned}
$$
Therefore
$$
m(t)=100 e^{-(\ln 2) t / 1590}
$$