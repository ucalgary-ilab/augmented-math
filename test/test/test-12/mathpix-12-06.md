356
CHAPTER 6 APPLICATIONS OF INTEGRATION
TEC Visual 6.2A shows an animation of Figure 5.
(a) Using 5 disks, $V \approx 4.2726$
is $y=\sqrt{r^{2}-x^{2}}$. So the cross-sectional area is
$$
A(x)=\pi y^{2}=\pi\left(r^{2}-x^{2}\right)
$$
Using the definition of volume with $a=-r$ and $b=r$, we have
$$
\begin{aligned}
V & =\int_{-r}^{r} A(x) d x=\int_{-r}^{r} \pi\left(r^{2}-x^{2}\right) d x \\
& =2 \pi \int_{0}^{r}\left(r^{2}-x^{2}\right) d x \\
& =2 \pi\left[r^{2} x-\frac{x^{3}}{3}\right]_{0}^{r}=2 \pi\left(r^{3}-\frac{r^{3}}{3}\right) \\
& =\frac{4}{3} \pi r^{3}
\end{aligned}
$$
Figure 5 illustrates the definition of volume when the solid is a sphere with radius $r=1$. From the result of Example 1, we know that the volume of the sphere is ${ }_{3}^{4} \pi \approx 4.18879$. Here the slabs are circular cylinders, or disks, and the three parts of Figure 5 show the geometric interpretations of the Riemann sums
$$
\sum_{i=1}^{n} A\left(\bar{x}_{i}\right) \Delta x=\sum_{i=1}^{n} \pi\left(1^{2}-\bar{x}_{i}^{2}\right) \Delta x
$$
when $n=5,10$, and 20 if we choose the sample points $x_{i}^{*}$ to be the midpoints $\bar{x}_{i}$. Notice that as we increase the number of approximating cylinders, the corresponding Riemann sums become closer to the true volume.
(b) Using 10 disks, $V \approx 4.2097$
(c) Using 20 disks, $V \approx 4.1940$
FIGURE 5 Approximating the volume of a sphere with radius 1
V EXAMPLE 2 Find the volume of the solid obtained by rotating about the $x$-axis the region under the curve $y=\sqrt{x}$ from 0 to 1 . Illustrate the definition of volume by sketching a typical approximating cylinder.
SOLUTION The region is shown in Figure 6(a). If we rotate about the $x$-axis, we get the solid shown in Figure 6(b). When we slice through the point $x$, we get a disk with radius $\sqrt{x}$. The area of this cross-section is
$$
A(x)=\pi(\sqrt{x})^{2}=\pi x
$$
and the volume of the approximating cylinder (a disk with thickness $\Delta x$ ) is
$$
A(x) \Delta x=\pi x \Delta x
$$